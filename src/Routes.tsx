import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { ApplicationRoutes } from "./modules/application/ApplicationRoutes";

interface RouterProviderProps {}

export const RouterProvider: FC<RouterProviderProps> = ({}) => {
  return (
    <Routes>
      <Route path="/*" element={<ApplicationRoutes />} />
    </Routes>
  );
};
