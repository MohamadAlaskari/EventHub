import { useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { authService } from '@/services/auth.service';
import { toast } from 'sonner';

const GoogleAuthCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { refreshUser } = useAuth();
  const handled = useRef(false);

  useEffect(() => {
    if (handled.current) return;
    handled.current = true;

    const accessToken = searchParams.get('access_token');
    const refreshToken = searchParams.get('refresh_token');

    if (!accessToken || !refreshToken) {
      toast.error('Google login failed', { description: 'Missing authentication tokens.' });
      navigate('/login');
      return;
    }

    authService
      .handleGoogleCallback(accessToken, refreshToken)
      .then(async (user) => {
        await refreshUser();
        toast.success(`Welcome, ${user.name}!`);
        navigate('/events');
      })
      .catch(() => {
        toast.error('Google login failed', { description: 'Please try again.' });
        navigate('/login');
      });
  }, [searchParams, navigate, refreshUser]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-muted-foreground">Signing you in with Google...</p>
    </div>
  );
};

export default GoogleAuthCallback;
