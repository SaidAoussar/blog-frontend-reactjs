import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./layouts/Layout";
import Home from "./pages/home";
import Blog from "./pages/blog";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Login from "./pages/login";
import Register from "./pages/register";
import ErrorPage from "./components/utils/ErrorPage";
import Profile from "./pages/profile";
import Settings from "./pages/settings";
import ProfileSetting from "./pages/settings/components/setting/profile-setting/ProfileSetting";
import AccountSetting from "./pages/settings/components/setting/account-setting/AccountSetting";
import CustomizationSetting from "./pages/settings/components/setting/customization-setting/CustomizationSetting";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/profile/:id/*" element={<Profile />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/settings" element={<Settings />}>
            <Route index element={<Navigate to="profile" />} />
            <Route path="profile" element={<ProfileSetting />} />
            <Route path="account" element={<AccountSetting />}></Route>
            <Route
              path="customization"
              element={<CustomizationSetting />}
            ></Route>
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
