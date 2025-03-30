import { Button, Result, Typography } from "antd";
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
      <div className="rounded-lg bg-[#F5F6F8] p-5">
        <Title level={5}>Жумажан Жанна Бериковна</Title>
        <p className="mb-5 text-sm text-gray-500">ИИН: 800619400123</p>
        <div className="flex gap-20 p-5 bg-white rounded-lg">
          <div>
            <p className="text-sm text-gray-500">Номер запроса</p>
            <p className="text-base">12345678901234</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Дата подачи запроса</p>
            <p className="text-base">02.11.2020 12:34</p>
          </div>
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
