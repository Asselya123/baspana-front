import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { ApplicationFormPage } from "./pages/ApplicationFormPage";

interface ApplicationRoutesProps {}

export const ApplicationRoutes: FC<ApplicationRoutesProps> = ({}) => {
  return (
    <Routes>
      <Route path="/" element={<ApplicationFormPage />} />
    </Routes>
  );
};
