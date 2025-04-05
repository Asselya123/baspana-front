import { MessageOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import { FC } from "react";

const { Title, Text } = Typography;

interface ConfirmationWaitProps {
  onSubmit: () => void;
  loading: boolean;
}

export const ConfirmationWait: FC<ConfirmationWaitProps> = ({
  onSubmit,
  loading,
}) => {
  return (
    <div className="mb-10 rounded-lg bg-white p-5">
      <div className="mb-5 flex gap-4 rounded-lg bg-[#E7F5EE] p-5">
        <MessageOutlined className="block text-lg" />
        <div>
          <Title level={5}>Обратите внимание!</Title>
          <Text>
            На ваш номер телефона +7 700 *** ** 00 отправлен SMS запрос, на
            получение согласия и обработку персональных данных из
            Государственной базы данных, на которое вам необходимо будет
            ответить. Если SMS не пришло в течении 5 минут, просим повторно
            отправить запрос.
          </Text>
        </div>
      </div>
      <div className="mb-5">
        <Text strong className="!text-[#008F91]">
          Пожалуйста, ожидайте. Идёт запрос в государственные базы данных.
        </Text>
        <p className="text-sm text-gray-500">
          Время ожидания до нескольких минут
        </p>
      </div>
      <div className="mt-8 flex justify-end">
        <Button icon={<ReloadOutlined />} onClick={onSubmit} loading={loading}>
          Обновить
        </Button>
      </div>
    </div>
  );
};
