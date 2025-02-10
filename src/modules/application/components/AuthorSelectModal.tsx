import { Button, Modal, Radio, Typography } from "antd";
import { FC } from "react";

interface AuthorSelectModalProps {}

export const AuthorSelectModal: FC<AuthorSelectModalProps> = ({}) => {
  return (
    <Modal
      open={true}
      title="Кто подает заяку"
      footer={[
        <Button key="submit" type="primary">
          Подать заявку
        </Button>,
      ]}
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <div className="space-y-5">
        <div className="flex items-center gap-2">
          <Radio />
          <div className="rounded-2xl border border-[#008F91] p-5">
            <Typography.Title level={5}>
              Самостоятельная подача
            </Typography.Title>
            <Typography.Paragraph>
              (Фамилия Имя Отчество авторизованного пользователя)
            </Typography.Paragraph>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Radio />
          <div className="rounded-2xl border border-[#008F91] p-5">
            <Typography.Title level={5}>
              Самостоятельная подача
            </Typography.Title>
            <Typography.Paragraph>
              (Фамилия Имя Отчество авторизованного пользователя)
            </Typography.Paragraph>
          </div>
        </div>
      </div>
    </Modal>
  );
};
