import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Loader } from 'lucide-react';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';

import { useAuthStore } from './store/useAuthStore';
import { useEffect } from 'react';

import { Toaster } from 'react-hot-toast';

export default function App() {
    const { authUser, checkAuth, isCheckingAuth } = useAuthStore();


  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({ authUser });

    if (isCheckingAuth && !authUser)
      return (
        <div className="flex items-center justify-center h-screen">
          <Loader className="size-10 animate-spin" />
        </div>
      );
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/login" />}
        />

        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/" />}
        />

      </Routes>
      <Toaster  />
    </div>
  );
}
