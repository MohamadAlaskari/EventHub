/**
 * 
 * This file is used to setup the token interceptor for axios
 * @module tokenInterceptor
 * 
 */
import type { AxiosInstance } from 'axios';
import { secureStorage } from '@/lib/storage';
import { AUTH_CONFIG } from '@/constants/auth';
import { AUTH_ENDPOINTS } from '@/constants/endpoints';

// Global callback to notify about refresh token expiration
let refreshTokenExpiredCallback: (() => void) | null = null;

export const setRefreshTokenExpiredCallback = (callback: (() => void) | null) => {
  refreshTokenExpiredCallback = callback;
};

export const setupTokenInterceptor = (http: AxiosInstance) => {
  http.interceptors.response.use(
    (response) => response,  // if the request is successful, return the response
    async (error) => {
      const original = error.config;

      // Check if this is a refresh endpoint error (400, 401, 403, 404)
      const isRefreshEndpoint = original.url?.includes(AUTH_ENDPOINTS.REFRESH);
      if (isRefreshEndpoint && error.response?.status) {
        // If refresh endpoint fails, notify and clear tokens
        secureStorage.removeItem(AUTH_CONFIG.TOKEN_KEY);
        secureStorage.removeItem(AUTH_CONFIG.REFRESH_TOKEN_KEY);
        if (refreshTokenExpiredCallback) {
          refreshTokenExpiredCallback();
        }
        return Promise.reject(error);
      }

      const orginalUrl = original.url?.includes(AUTH_ENDPOINTS.LOGIN) ||
        original.url?.includes(AUTH_ENDPOINTS.REGISTER) ||
        original.url?.includes(AUTH_ENDPOINTS.REFRESH)

      // if the error not 401 or from auth endpoints (login, register, refresh), return the error
      if (error.response?.status !== 401 || orginalUrl) {
        return Promise.reject(error);
      }

      // if the error is 401 (access token expired), show dialog instead of auto-refreshing
      // User must manually click "Refresh" button in the dialog
      const refreshToken = secureStorage.getItem(AUTH_CONFIG.REFRESH_TOKEN_KEY);
      if (!refreshToken) {
        // if there is no refresh token, clear the storage and notify
        secureStorage.removeItem(AUTH_CONFIG.TOKEN_KEY);
        if (refreshTokenExpiredCallback) {
          refreshTokenExpiredCallback();
        }
        return Promise.reject(error);
      }

      // Show dialog - user must manually refresh by clicking the button
      if (refreshTokenExpiredCallback) {
        refreshTokenExpiredCallback();
      }
      
      return Promise.reject(error);
    }
  );
};
