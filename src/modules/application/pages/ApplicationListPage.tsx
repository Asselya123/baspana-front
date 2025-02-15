import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Input, Segmented, Table, Typography } from "antd";
import { FC, useState } from "react";

const { Title } = Typography;

interface ApplicationListPageProps {}

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

export const ApplicationListPage: FC<ApplicationListPageProps> = ({}) => {
  const [activeTab, setActiveTab] = useState<string>("start");
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
        <Button icon={<ArrowRightOutlined />}>Общие сведения</Button>
      </div>
      <Segmented
        style={{ marginBottom: 8 }}
        value={activeTab}
        onChange={(value) => setActiveTab(value)}
        options={["start", "center", "end"]}
      />
      <div className="between flex">
        <Input prefix={<SearchOutlined />} />
      </div>
      <Table dataSource={[]} columns={columns} pagination={{ pageSize: 10 }} />
    </div>
  );
};
