import { PaperClipOutlined, ProfileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { FC } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

type MenuItem = Required<MenuProps>["items"][number];

interface PersonalCabinetLayoutProps {}

export const PersonalCabinetLayout: FC<PersonalCabinetLayoutProps> = ({}) => {
  const navigate = useNavigate();
  const items: MenuItem[] = [
    {
      key: "1",
      icon: <ProfileOutlined />,
      label: "Профиль",
      onClick: () => navigate("/"),
    },
    {
      key: "2",
      icon: <PaperClipOutlined />,
      label: "Заявки",
      onClick: () => navigate("/applications"),
    },
  ];
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex grow justify-center">
        <div className="flex w-full max-w-7xl">
          <Menu mode="vertical" items={items} style={{ width: 272 }} />
          <div className="flex-1 bg-[#F6F7F8] px-8 py-9">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
