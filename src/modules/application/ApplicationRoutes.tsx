import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { ApplicationFormPage } from "./pages/ApplicationFormPage";
import { ApplicationListPage } from "./pages/ApplicationListPage";
import { ApplicationSignPage } from "./pages/ApplicationSignPage";
import { PersonalCabinetLayout } from "./pages/PersonalCabinet";

interface ApplicationRoutesProps {}

export const ApplicationRoutes: FC<ApplicationRoutesProps> = ({}) => {
  return (
    <Routes>
      <Route element={<PersonalCabinetLayout />}>
        <Route path="/" element={<ApplicationFormPage />} />
        <Route path="/sign" element={<ApplicationSignPage />} />
        <Route path="/applications" element={<ApplicationListPage />} />
      </Route>
    </Routes>
  );
};
