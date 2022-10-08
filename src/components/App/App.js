import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import {  lazy } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { refreshUser } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';

// import Layout from '../Layout';
import Header from '../Header';
import PrivateRoute from 'components/PrivateRoute';
import RestrictedRoute from 'components/RestrictedRoute';

import HomePage from '../../pages/HomePage';
import RegisterPage from '../../pages/RegisterPage';
import LoginPage from '../../pages/LoginPage';
import ContactsPage from '../../pages/ContactsPage';

// const HomePage = lazy(() => import('../../pages/HomePage'));
// const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
// const LoginPage = lazy(() => import('../../pages/LoginPage'));
// const ContactsPage = lazy(() => import('../../pages/ContactsPage'));


export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div>
      <Header />
      {/* <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/contacts">Contacts</Link>
    </nav> */}
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
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
        {/* </Route> */}
      </Routes>
      <Outlet />
    </div>
  );
};