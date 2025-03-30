import { ArrowLeftOutlined } from "@ant-design/icons";
import { FC } from "react";

export const GoBack: FC = () => {
  return (
    <div className="flex items-center gap-2 mt-5">
      <ArrowLeftOutlined className="text-sm font-medium text-gray-500" />
      <span className="text-base font-medium text-gray-500">Назад</span>
    </div>
  );
};
