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
const ProtectedRoute = ({ children }: ProctedRouteProps) => {
  const { currUser, isAuthorized, loading } = useAuth();

  if (!loading) {
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

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicView />} />
        <Route path="/login" element={<LoginPage />} />
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
