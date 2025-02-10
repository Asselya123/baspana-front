import { ArrowLeftOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Card, Checkbox, Typography } from "antd";
import { FC } from "react";

const { Title } = Typography;

interface ApplicationSignPageProps {}

export const ApplicationSignPage: FC<ApplicationSignPageProps> = ({}) => {
  return (
    <div>
      <Breadcrumb
        items={[
          {
            title: (
              <span>
                <ArrowLeftOutlined /> Центр обеспечения жильем
              </span>
            ),
          },
        ]}
      />
      <div className="flex items-center justify-between">
        <Title level={2}>Центр обеспечения жильем</Title>
      </div>
      <Card
        title={
          <div>
            <Typography.Title level={5}>Общие сведения</Typography.Title>
            <Typography.Paragraph>Общие сведения</Typography.Paragraph>
          </div>
        }
      >
        <Card
          title={
            <div>
              <Typography.Paragraph>Общие сведения</Typography.Paragraph>
            </div>
          }
          style={{
            background: "#F5F6F8",
          }}
        >
          {[1, 2, 3].map(() => (
            <Card>
              <Checkbox>
                Ознакомлен (-а) с Заявлением{" "}
                <span className="block text-gray-500">
                  (Обязательно к заполнению)
                </span>
              </Checkbox>
            </Card>
          ))}
        </Card>
        <div className="flex items-center justify-between">
          <Checkbox>
            Ознакомлен (-а) с Заявлением{" "}
            <span className="block text-gray-500">
              (Обязательно к заполнению)
            </span>
          </Checkbox>
          <Button type="primary">Добавить</Button>
        </div>
      </Card>
    </div>
  );
};
