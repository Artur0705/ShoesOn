import React, { useRef } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Flex, useDisclosure } from "@chakra-ui/react";

import Hero from "./components/Hero";
import Nav from "./components/Nav";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage.js";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import ErrorPage from "./pages/ErrorPage";
import DrawerComponent from "./components/DrawerComponent";
import ProductsPage from "./pages/ProductsPage";
import ShippingPage from "./pages/ShippingPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="/" element={<HomePage />}></Route>,
        <Route path="login" element={<SigninPage />}></Route>
        <Route path="register" element={<RegisterPage />}></Route>,
        <Route path="profile" element={<ProfilePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="shipping" element={<ShippingPage />} />
        <Route path="placeorder" element={<PlaceOrderPage />} />
        <Route path="category/:id" element={<HomePage />} />
        <Route path="cart/:id" element={<CartPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return (
    <Box>
      <Nav ref={btnRef} onOpen={onOpen} userInfo={userInfo} />
      <RouterProvider router={router} />

      <AboutUs />
      <Testimonials />
      <ContactUs />

      <Footer />
      <DrawerComponent isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </Box>
  );
}

export default App;
