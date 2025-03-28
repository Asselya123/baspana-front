import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { ApplicationRoutes } from "./modules/application/ApplicationRoutes";
import LoginPage from "./modules/application/pages/LoginPage";

interface RouterProviderProps {}

export const RouterProvider: FC<RouterProviderProps> = ({}) => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<ApplicationRoutes />} />
    </Routes>
  );
};
