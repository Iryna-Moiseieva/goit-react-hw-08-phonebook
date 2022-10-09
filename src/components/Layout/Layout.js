import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader  from '../Loader';
import Header from '../Header';

export default function Layout() {
  return (
    <>
      <Header />

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  )
}