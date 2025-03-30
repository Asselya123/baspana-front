import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input, Table, Tag, Typography } from "antd";
import { ColumnType } from "antd/es/table";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface ApplicationListPageProps {}

const columns: ColumnType<{
  title: string;
  status: string;
  id: string;
  createdAt: string;
}>[] = [
  {
    title: "Наименование",
    dataIndex: "title",
    key: "title",
    render: (_, record) => {
      return <Typography.Text strong>{record.title}</Typography.Text>;
    },
  },
  {
    title: "Статус",
    dataIndex: "status",
    key: "status",
    render: (_, record) => {
      return (
        <Tag color={record.status === "Принято" ? "success" : "error"}>
          {record.status}
        </Tag>
      );
    },
  },
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (_, record) => {
      return <p className="text-base text-gray-500">№ {record.id}</p>;
    },
  },
  {
    title: "Дата создания",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (_, record) => {
      return <p className="text-base text-gray-500">№ {record.id}</p>;
    },
  },
];

const data = [
  {
    title: "Заявление: Постановка на учет",
    status: "Принято",
    id: "12345678",
    createdAt: "2021-01-01",
  },
];

export const ApplicationListPage: FC<ApplicationListPageProps> = ({}) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="mb-10 max-w-[300px]">
        <Input prefix={<SearchOutlined />} placeholder="Поиск" />
      </div>
      <Table
        dataSource={data}
        columns={columns}
        pagination={{ pageSize: 10 }}
        footer={() => {
          return (
            <div className="flex justify-center">
              <Button icon={<PlusOutlined />} onClick={() => navigate("/sign")}>
                Подать заявку еще раз
              </Button>
            </div>
          );
        }}
      />
    </div>
  );
};
