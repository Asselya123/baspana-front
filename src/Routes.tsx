import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { ApplicationFormPage } from "./modules/application/pages/ApplicationFormPage";

interface RouterProviderProps {}

export const RouterProvider: FC<RouterProviderProps> = ({}) => {
  return (
    <Routes>
      <Route path="/" element={<ApplicationFormPage />} />
    </Routes>
  );
};
