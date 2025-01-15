import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../_hooks/useAuth';
import { AdminDashboard } from '../pages/AdminDashboard';
import { ThemeEditor } from '../pages/ThemeEditor';
import { Toaster } from '@/components/ui/toaster';

interface ProctedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProctedRouteProps) => {
  console.log('ProtectedRoute');
  const { currUser, isAuthorized, loading } = useAuth();

  if (!loading && !currUser) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!currUser || !isAuthorized) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default function AdminRoutes() {
  return (
    <Routes>
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminDashboard />
            <Toaster />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/theme"
        element={
          <ProtectedRoute>
            <ThemeEditor />
            <Toaster />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
