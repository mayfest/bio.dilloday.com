import { useEffect } from 'react';
import { useAuth } from '../_hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export function LoginPage() {
  const { signInWithGoogle, currUser, isAuthorized } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('currUser', currUser);
    if (currUser && isAuthorized) {
      navigate('/admin');
    }
  }, [currUser, isAuthorized, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Admin Login</h2>
          <p className="mt-2 text-gray-600">Sign in to manage your bio links</p>
        </div>
        <button
          onClick={signInWithGoogle}
          className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
