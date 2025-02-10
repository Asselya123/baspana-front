import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Empty, Segmented, Typography } from "antd";
import { FC, useState } from "react";

const { Title } = Typography;

interface ApplicationFormPageProps {}

export const ApplicationFormPage: FC<ApplicationFormPageProps> = ({}) => {
  const [activeTab, setActiveTab] = useState<string>("start");
  return (
    <div>
      <div className="flex items-center justify-between">
        <Title level={2}>Центр обеспечения жильем</Title>
        <Button icon={<ArrowRightOutlined />}>Общие сведения</Button>
      </div>
      <Segmented
        style={{ marginBottom: 8 }}
        value={activeTab}
        onChange={(value) => setActiveTab(value)}
        options={["start", "center", "end"]}
      />
      <Empty />
    </div>
  );
};
