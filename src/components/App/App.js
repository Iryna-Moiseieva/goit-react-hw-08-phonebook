import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { refreshUser } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { Toaster } from 'react-hot-toast';

import Layout from '../Layout';
import Loader from '../Loader';
import PrivateRoute from '../PrivateRoute';
import RestrictedRoute from '../RestrictedRoute';

const HomePage = lazy(() => import('../../pages/HomePage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));


export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
      <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
            } />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
            } />
          <Route
            path="/contacts"
            element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            } />
        </Route>
          </Routes>
        <Toaster />
    </div>
  );
};