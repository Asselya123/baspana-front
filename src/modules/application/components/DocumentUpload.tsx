import { MessageOutlined } from "@ant-design/icons";
import { Button, Typography, Upload } from "antd";
import { FC } from "react";

const { Title } = Typography;

const { Dragger } = Upload;

interface DocumentUploadProps {
  onSubmit: () => void;
}

export const DocumentUpload: FC<DocumentUploadProps> = ({ onSubmit }) => {
  return (
    <div className="p-5 mb-10 bg-white rounded-lg">
      <Title level={5}>Загрузите документ основание</Title>
      <p className="mb-5 text-base text-gray-500">
        Подача заявки возможна без предоставления дополнительных документов
      </p>
      <div className="mb-5 flex gap-4 rounded-lg border border-[#007FF5] p-5">
        <MessageOutlined className="block text-lg" />
        <ul className="list-disc list-inside">
          Загрузите документ основание если:
          <li>Единственное жилище заявителя признано аварийным;</li>
          <li>
            Заявитель не достиг совершеннолетнего возраста, но является сиротой
            или оставшийся без попечения родителей, потерявший родителей до
            совершеннолетия, страдающий тяжелыми формами некоторых хронических
            заболеваний.
          </li>
        </ul>
      </div>
      <Dragger>
        <div className="flex items-center justify-center w-full gap-5">
          перетащите файл сюда, чтобы загрузить или <Button>Загрузить</Button>
        </div>
      </Dragger>
      <div className="flex justify-end mt-8">
        <Button type="primary" onClick={onSubmit}>
          Далее
        </Button>
      </div>
    </div>
  );
};
