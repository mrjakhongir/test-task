import { Table } from "antd";
import type { TableColumnsType } from "antd";
import Container from "../../components/container/Container";
import DropdownMenu from "./DropdownMenu";

interface DataType {
  company: string;
  numOfEmployees: number;
  actions: string;
  key: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Название компании",
    dataIndex: "company",
    key: "company",
  },
  {
    title: "Количество сотрудников",
    dataIndex: "numOfEmployees",
    key: "numOfEmployees",
  },
  {
    title: "",
    dataIndex: "actions",
    key: "actions",
    className: "w-0",
    render: (id) => <DropdownMenu companyId={id} />,
  },
];

const data: DataType[] = [
  {
    company: "John Brown",
    numOfEmployees: 32,
    actions: "1",
    key: "1",
  },
];
const Dashboard = () => {
  return (
    <div>
      <Container className='p-4'>
        <Table<DataType>
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </Container>
    </div>
  );
};

export default Dashboard;
