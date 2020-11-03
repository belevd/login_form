import React, { useState } from "react";
import { loadUsers, saveCurrent } from "./actions";
import "antd/dist/antd.css";
import { Table, Typography } from "antd";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { store } from "../../redux/store";

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
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    PageSize: 6,
    total: 12,
  });

  let currentPage = useSelector(
    (state) => state.setCurrentPageOfUsersList.page
  );

  React.useEffect(() => {
    setLoading(true);
    if (currentPage) {
      loadUsers(currentPage).then((data) => {
        setPagination({
          current: data.page,
          PageSize: data.per_page,
          total: data.total,
        });
        setUsers(data.data);
        setLoading(false);
      });
    } else {
      loadUsers(pagination.current).then((data) => {
        setPagination({
          ...pagination,
          PageSize: data.per_page,
          total: data.total,
        });
        setUsers(data.data);
        setLoading(false);
      });
    }
  }, []);

  async function handleTableChange(e) {
    setLoading(true);
    await loadUsers(e.current).then((data) => {
      setUsers(data.data);
      setPagination({ ...pagination, current: e.current });
      setLoading(false);
    });
  }

  const savePage = () => {
    store.dispatch(saveCurrent(pagination.current));
  };

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
        onRow={(record) => {
          return {
            onClick: () => {
              savePage();
              const id = record.id;
              history.push(`/users/${id}`);
            },
          };
        }}
      />
    </div>
  );
};
