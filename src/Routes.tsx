import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { ApplicationFormPage } from "./modules/application/pages/ApplicationFormPage";
import { ApplicationListPage } from "./modules/application/pages/ApplicationListPage";
import { ApplicationSignPage } from "./modules/application/pages/ApplicationSignPage";
import { OperationsPage } from "./modules/application/pages/OperationsPage";
import { PersonalCabinetLayout } from "./modules/application/pages/PersonalCabinetLayout";
import { ProfilePage } from "./modules/application/pages/ProfilePage";
import { LandingPage } from "./modules/shared/pages/LandingPage";
import LoginPage from "./modules/shared/pages/LoginPage";

interface RouterProviderProps {}

export const RouterProvider: FC<RouterProviderProps> = ({}) => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<LandingPage />} />
      <Route element={<PersonalCabinetLayout />}>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/operations" element={<OperationsPage />} />
        <Route path="/form" element={<ApplicationFormPage />} />
        <Route path="/sign" element={<ApplicationSignPage />} />
        <Route path="/applications" element={<ApplicationListPage />} />
      </Route>
    </Routes>
  );
};
