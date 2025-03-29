import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { ApartmentDetailsPage } from "../apartment/pages/ApartmentDetailsPage";
import { ApplicationFormPage } from "./pages/ApplicationFormPage";
import { ApplicationListPage } from "./pages/ApplicationListPage";
import { ApplicationSignPage } from "./pages/ApplicationSignPage";
import { OperationsPage } from "./pages/OperationsPage";
import { PersonalCabinetLayout } from "./pages/PersonalCabinetLayout";

interface ApplicationRoutesProps {}

export const ApplicationRoutes: FC<ApplicationRoutesProps> = ({}) => {
  return (
    <Routes>
      <Route element={<PersonalCabinetLayout />}>
        <Route path="/form" element={<ApplicationFormPage />} />
        <Route path="/sign" element={<ApplicationSignPage />} />
        <Route path="/applications" element={<ApplicationListPage />} />
        <Route path="/operations" element={<OperationsPage />} />
      </Route>

      <Route path="/apartments/:id" element={<ApartmentDetailsPage />} />
    </Routes>
  );
};
