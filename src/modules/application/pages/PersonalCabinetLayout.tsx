import {
  PaperClipOutlined,
  ProfileOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { FC } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

type MenuItem = Required<MenuProps>["items"][number];

interface PersonalCabinetLayoutProps {}

export const PersonalCabinetLayout: FC<PersonalCabinetLayoutProps> = ({}) => {
  const navigate = useNavigate();
  const items: MenuItem[] = [
    {
      key: "profile",
      icon: <ProfileOutlined />,
      label: "Профиль",
      onClick: () => navigate("/profile"),
    },
    {
      key: "applications",
      icon: <PaperClipOutlined />,
      label: "Заявки",
      onClick: () => navigate("/applications"),
    },
    {
      key: "operations",
      icon: <SettingOutlined />,
      label: "Операции",
      onClick: () => navigate("/operations"),
    },
  ];
  const { pathname } = useLocation();

  let defaultSelectedKey: string = items[0]?.key?.toString() ?? "";
  items.forEach((item) => {
    if (typeof item?.key === "string" && pathname.includes(item?.key)) {
      defaultSelectedKey = item?.key;
    }
  });

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="mx-auto flex w-full max-w-[1280px] grow justify-center px-10">
        <div className="flex w-full">
          <Menu
            mode="vertical"
            items={items}
            style={{ width: 272 }}
            className="min-w-[272px]"
            defaultSelectedKeys={[defaultSelectedKey]}
          />
          <div className="grow bg-[#F6F7F8] px-8 py-9">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
