import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import RegistrationPage from "../../pages/RegistrationPage";
import LoginPage from "../../pages/LoginPage";
import ContactsPage from "../../pages/ContactsPage";
import NotFound from "../../pages/NotFound";
import { Suspense } from "react";
import Loader from "../Loader/Loader";
import Layout from "../Layout/Layout";

const App = () => {
  return (
    <div>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
};

export default App;
