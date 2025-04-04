import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Footer from "widgets/Footer/Footer";
import HeaderMenu from "widgets/HeaderMenu";
import { CategoryPage } from "./CategoryPage";
import { ProductPage } from "./ProductPage";
import { Cart } from "widgets/Cart/Cart";
import { SignUpPage } from "./SignUpPage";
import { SignInPage } from "./SignInPage";
import UserPage from "./UserPage";
import inMemoryJWT from "entities/auth/model/inMemoryJWT";
import { useEffect, useState } from "react";
import { useRefreshMutation } from "entities/auth/api/authApi";

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

        <Route element={<ProtectedRoute />}>
          <Route path="user" element={<UserPage />} />
        </Route>
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

const ProtectedRoute = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [refreshToken] = useRefreshMutation();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // 1. Проверяем текущий токен
        let token = inMemoryJWT.getToken();

        // 2. Если токена нет, пытаемся обновить
        if (!token) {
          const result = await refreshToken().unwrap();
          if (result?.accessToken) {
            inMemoryJWT.setToken(
              result.accessToken,
              result.accessTokenExpiration
            );
            token = result.accessToken;
          }
        }

        setIsAuthenticated(!!token);
      } catch (error) {
        console.error("Auth check failed:", error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [refreshToken]);

  if (isLoading) {
    return <div>Loading...</div>; // Или ваш лоадер
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

// const ProtectedRoute = () => {
//   const accessToken = inMemoryJWT.getToken();
//   const [getToken] = useRefreshMutation();
//   const getAccessToken = async (): Promise<void> => {
//     if (!accessToken) {
//       const result = await getToken().unwrap();
//       await inMemoryJWT.setToken(
//         result?.accessToken,
//         result?.accessTokenExpiration
//       );
//       console.log(accessToken, "access");
//     }
//   };
//   useEffect(() => {
//     getAccessToken();
//   }, []);

//   const accessToken = inMemoryJWT.getToken();
//   console.log(accessToken, "is TOKEN");
//   const isAuthenticated = !!accessToken; // Проверяем наличие токена

//   if (!isAuthenticated) {
//     // Если пользователь не аутентифицирован, перенаправляем на страницу входа
//     return <Navigate to="/" replace />;
//   }

//   // Если аутентифицирован, рендерим дочерние роуты
//   return <Outlet />;
// };
