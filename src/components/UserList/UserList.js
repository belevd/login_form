import React, { useState } from "react";
import { loadUsers } from "./actions";
import "antd/dist/antd.css";
import { Table, Typography } from "antd";

const { Title } = Typography;

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    defaultPageSize: 6,
    total: 12,
  });
  const columns = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      render: avatar => <img src={avatar} height="50" alt="user avatar" />,
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

  React.useEffect(() => {
    loadUsers(1, setLoading).then((data) => {
      setUsers(data.data);
      setPagination({...pagination, total: data.total, defaultPageSize: data["per_page"]})
      setLoading(false);
    });
  }, []);

  function handleTableChange(e) {
    loadUsers(e.current, setLoading, setPagination, pagination).then((data) => {
      setUsers(data.data);
      setLoading(false);
      console.log(pagination);
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
      ;
    </div>
  );
};
