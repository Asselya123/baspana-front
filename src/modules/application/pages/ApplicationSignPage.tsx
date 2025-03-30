import { ArrowLeftOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { FC, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ApplicationResult } from "../components/ApplicationResult";
import { ApplicationTemplate } from "../components/ApplicationTemplate";
import { ConfirmationWait } from "../components/ConfirmationWait";
import { DocumentUpload } from "../components/DocumentUpload";
import { MockEspModal } from "../components/MockEspModal";

const { Title } = Typography;

const getStep = (search: string) => {
  const step = new URLSearchParams(search).get("step");
  if (Number.isNaN(Number(step))) return 1;
  if (Number(step) < 1) return 1;
  if (Number(step) > 3) return 3;
  return Number(step);
};

interface ApplicationSignPageProps {}

export const ApplicationSignPage: FC<ApplicationSignPageProps> = ({}) => {
  const [openMockEspModal, setOpenMockEspModal] = useState(false);
  const location = useLocation();
  const [step, setStep] = useState(getStep(location.search));
  const navigate = useNavigate();
  return (
    <Layout className="bg-[#F6F7F8]">
      <div className="flex items-center gap-2 mt-5">
        <ArrowLeftOutlined className="text-sm font-medium text-gray-500" />
        <span className="text-base font-medium text-gray-500">Назад</span>
      </div>
      <Title level={4} className="mt-2">
        Постановка на учет
      </Title>
      {step === 1 ? (
        <>
          <MockEspModal
            open={openMockEspModal}
            onClose={() => {
              setOpenMockEspModal(false);
              navigate(`${location.pathname}?step=2`, { replace: true });
              setStep(2);
            }}
          />
          <ApplicationTemplate onSubmit={() => setOpenMockEspModal(true)} />
        </>
      ) : step === 2 ? (
        <DocumentUpload
          onSubmit={() => {
            setStep(3);
            navigate(`${location.pathname}?step=3`, { replace: true });
          }}
        />
      ) : step === 3 ? (
        <ConfirmationWait
          onSubmit={() => {
            setStep(4);
            navigate(`${location.pathname}?step=4`, { replace: true });
          }}
        />
      ) : (
        <ApplicationResult onSubmit={() => navigate("/")} />
      )}
    </Layout>
  );
};
