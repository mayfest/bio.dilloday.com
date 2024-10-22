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

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<PublicView />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
