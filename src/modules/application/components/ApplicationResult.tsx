import { DownloadOutlined, FileOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Result, Typography } from "antd";
import { FC } from "react";

const { Title } = Typography;

interface ApplicationResultProps {
  onSubmit: () => void;
}

export const ApplicationResult: FC<ApplicationResultProps> = ({ onSubmit }) => {
  return (
    <div className="p-5 mb-10 bg-white rounded-lg">
      <Result
        status="success"
        title="Ваше заявление принято на рассмотрение"
        subTitle="Вы можете отслеживать статус заявки в Личном кабинете"
        className="!pb-5"
      />
      <div className="mb-5 rounded-lg bg-[#F5F6F8] p-5">
        <Title level={5}>Жумажан Жанна Бериковна</Title>
        <p className="mb-5 text-sm text-gray-500">ИИН: 800619400123</p>
        <div className="flex gap-20 p-5 mb-5 bg-white rounded-lg">
          <div>
            <p className="text-sm text-gray-500">Номер запроса</p>
            <p className="text-base">12345678901234</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Дата подачи запроса</p>
            <p className="text-base">02.11.2020 12:34</p>
          </div>
        </div>
        <div className="flex justify-between p-5 bg-white rounded-lg">
          <div className="flex items-center gap-3">
            <FileOutlined className="text-lg" />
            <p className="text-base text-blue-600">
              Заявление о постановке на учет
            </p>
            <p className="text-sm text-gray-500">11.10.2022 г.</p>
          </div>
          <ConfigProvider
            theme={{
              components: { Button: { colorPrimary: "#333839" } },
            }}
          >
            <Button type="primary" icon={<DownloadOutlined />}>
              Скачать
            </Button>
          </ConfigProvider>
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <Button type="primary" onClick={onSubmit}>
          На главную
        </Button>
      </div>
    </div>
  );
};
