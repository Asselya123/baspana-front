import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input, Table } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  return (
    <div>
      <div className="mb-10 max-w-[300px]">
        <Input prefix={<SearchOutlined />} placeholder="Поиск" />
      </div>
      <Table
        dataSource={[]}
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
