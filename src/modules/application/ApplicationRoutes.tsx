import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { ApplicationFormPage } from "./pages/ApplicationFormPage";
import { ApplicationSignPage } from "./pages/ApplicationSignPage";

interface ApplicationRoutesProps {}

export const ApplicationRoutes: FC<ApplicationRoutesProps> = ({}) => {
  return (
    <Routes>
      <Route path="/" element={<ApplicationFormPage />} />
      <Route path="/sign" element={<ApplicationSignPage />} />
    </Routes>
  );
};
