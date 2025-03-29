import { SearchOutlined } from "@ant-design/icons";
import { Input, Table } from "antd";
import { FC } from "react";

interface ApplicationListPageProps {}

const columns = [
  {
    title: "Наименование",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Статус",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Дата создания",
    dataIndex: "createdAt",
    key: "createdAt",
  },
];

export const ApplicationListPage: FC<ApplicationListPageProps> = ({}) => {
  return (
    <div>
      <div className="mb-10 max-w-[300px]">
        <Input prefix={<SearchOutlined />} placeholder="Поиск" />
      </div>
      <Table dataSource={[]} columns={columns} pagination={{ pageSize: 10 }} />
    </div>
  );
};
