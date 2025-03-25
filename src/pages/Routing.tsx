import { Outlet, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Footer from "widgets/Footer/Footer";
import HeaderMenu from "widgets/HeaderMenu";
import { CategoryPage } from "./CategoryPage";
import { ProductPage } from "./ProductPage";
import { Cart } from "widgets/Cart/Cart";
import { SignUpPage } from "./SignUpPage";
import { SignInPage } from "./SignInPage";
import UserPage from "./UserPage";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="Category" element={<CategoryPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="signin" element={<SignInPage />} />
        {/* <Route element={<RequireAuth />}> */}
        <Route path="Item/:id" element={<ProductPage />} />
        <Route path="user" element={<UserPage />} />

        {/* <Route path="*" element={<NotFound />} />
          <Route path="Cart" element={<CartPage />} /> */}
        {/* </Route> */}
      </Route>
    </Routes>
  );
}

export default Routing;

const MainLayout = () => {
  return (
    <div className="min-h-screen max-h-screen flex flex-col w-full max-w-full min-w-full justify-between relative px-[10px]">
      <HeaderMenu />
      <div className="max-w-[1144px] mx-auto my-auto">
        <Outlet />
      </div>
      <Footer />
      <Cart />
    </div>
  );
};

//  <Routes>
//       <Route path="/" element={<MainLayout />}>
//         /* Public routes */
//         // <Route path="" element={<HomePage />} />

//          <Route path="Login" element={<LoginPage />} />
//         <Route path="Register" element={<RegisterPage />} />
//   // Protected routes
//          <Route element={<RequireAuth />}>
//           <Route path="Item/:id" element={<ItemPage />} />
//           <Route path="Category" element={<CategoryPage />} />
//           <Route path="*" element={<NotFound />} />
//           <Route path="Cart" element={<CartPage />} />
//         </Route>
//        </Route>
//     </Routes>
