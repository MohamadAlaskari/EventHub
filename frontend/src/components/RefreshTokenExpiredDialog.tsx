import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

export const RefreshTokenExpiredDialog = () => {
  const { isRefreshTokenExpired, handleRefreshToken, logout, dismissRefreshTokenDialog } = useAuth();

  const handleRefresh = async () => {
    await handleRefreshToken();
  };

  const handleLogout = async () => {
    await logout();
    dismissRefreshTokenDialog();
  };

  return (
    <Dialog 
      open={isRefreshTokenExpired} 
      onOpenChange={() => {
        // Prevent closing - user must choose an action (refresh or logout)
      }}
      modal={true}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Session Expired</DialogTitle>
          <DialogDescription>
            Your session has expired. Would you like to refresh your session or log out?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            onClick={handleLogout}
            className="w-full sm:w-auto"
          >
            Logout
          </Button>
          <Button
            onClick={handleRefresh}
            className="w-full sm:w-auto"
          >
            Refresh Session
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

