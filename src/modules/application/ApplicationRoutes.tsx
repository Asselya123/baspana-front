import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { ApartmentDetailsPage } from "../apartment/pages/ApartmentDetailsPage";
import { LandingPage } from "../shared/pages/LandingPage";
import { ApplicationFormPage } from "./pages/ApplicationFormPage";
import { ApplicationListPage } from "./pages/ApplicationListPage";
import { ApplicationSignPage } from "./pages/ApplicationSignPage";
import { OperationsPage } from "./pages/OperationsPage";
import { PersonalCabinetLayout } from "./pages/PersonalCabinet";
import { ProfilePage } from "./pages/ProfilePage";

interface ApplicationRoutesProps {}

export const ApplicationRoutes: FC<ApplicationRoutesProps> = ({}) => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<PersonalCabinetLayout />}>
        <Route path="/form" element={<ApplicationFormPage />} />
        <Route path="/sign" element={<ApplicationSignPage />} />
        <Route path="/applications" element={<ApplicationListPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/operations" element={<OperationsPage />} />
      </Route>

      <Route path="/apartments/:id" element={<ApartmentDetailsPage />} />
    </Routes>
  );
};
