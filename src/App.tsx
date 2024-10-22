import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useAuth } from './_hooks/useAuth';
import { ProctedRouteProps } from './types';
import PublicView from './pages/PublicPage';
import { LoginPage } from './pages/LoginPage';
import { AuthProvider } from './_contexts/AuthProvider';
import { AdminDashboard } from './pages/AdminDashboard';

const ProtectedRoute = ({ children }: ProctedRouteProps) => {
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
  console.log('isAuthorized', isAuthorized);
  return children;
};

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicView />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </AuthProvider>
  );
}
