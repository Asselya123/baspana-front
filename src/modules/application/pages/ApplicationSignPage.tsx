import { ArrowLeftOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { FC, useState } from "react";
import { Layout } from "@/components/Layout";
import { ApplicationTemplate } from "../components/ApplicationTemplate";
import { MockEspModal } from "../components/MockEspModal";

const { Title } = Typography;

interface ApplicationSignPageProps {}

export const ApplicationSignPage: FC<ApplicationSignPageProps> = ({}) => {
  const [openMockEspModal, setOpenMockEspModal] = useState(false);
  return (
    <Layout className="bg-[#F6F7F8]">
      <div className="flex items-center gap-2 mt-5">
        <ArrowLeftOutlined className="text-sm font-medium text-gray-500" />
        <span className="text-base font-medium text-gray-500">Назад</span>
      </div>
      <Title level={4} className="mt-2">
        Постановка на учет
      </Title>
      <MockEspModal
        open={openMockEspModal}
        onClose={() => setOpenMockEspModal(false)}
      />
      <ApplicationTemplate onSubmit={() => setOpenMockEspModal(true)} />
    </Layout>
  );
};
