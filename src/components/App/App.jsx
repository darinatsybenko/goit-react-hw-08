import { Route, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import Loader from "../Loader/Loader";
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operation";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute.";
import { selectisRefreshing } from "../../redux/auth/selectors";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const HomePage = lazy(() => import("../../pages/HomePage"));
const LoginPage = lazy(() => import("../../pages/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage"));
const NotFound = lazy(() => import("../../pages/NotFound"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage"));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectisRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }),
    [dispatch];

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegistrationPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
};

export default App;
