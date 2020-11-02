import React, { useState } from "react";
import { loadUsers, loadDefault } from "./actions";
import "antd/dist/antd.css";
import { Table, Typography } from "antd";

const { Title } = Typography;

const columns = [
  {
    title: "Avatar",
    dataIndex: "avatar",
    render: (avatar) => <img src={avatar} height="50" alt="user avatar" />,
    key: "avatar",
  },
  {
    title: "First name",
    dataIndex: "first_name",
    key: "first_name",
  },
  {
    title: "Last name",
    dataIndex: "last_name",
    key: "last_name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
];

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    PageSize: 1,
    total: 1,
  });

  React.useEffect(() => {
    setLoading(true);
    loadDefault(setLoading).then((data) => {
      setPagination({
        PageSize: data.per_page,
        total: data.total,
      });
      setUsers(data.data);
      setLoading(false);
    });
  }, []);

  function handleTableChange(e) {
    setLoading(true);
    loadUsers(e.current, setLoading).then((data) => {
      setUsers(data.data);
      setPagination({ ...pagination, current: e.current });
      setLoading(false);
    });
  }

  return (
    <div>
      <Title className="text-center my-3">Список пользователей</Title>
      <Table
        columns={columns}
        rowKey={(record) => record.id}
        dataSource={users}
        pagination={pagination}
        loading={loading}
        onChange={handleTableChange}
      />
    </div>
  );
};
