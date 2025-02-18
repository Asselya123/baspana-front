import { PaperClipOutlined, ProfileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { FC } from "react";
import { Outlet, useNavigate } from "react-router-dom";
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
    <div>
      <Header />
      <div className="flex">
        <Menu mode="vertical" items={items} />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
