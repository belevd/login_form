import React from "react";
import { Avatar, Image, Typography, Row, Col } from "antd";
import { loadUser } from "./actions";
import "./SingleUser.css";

const { Title } = Typography;

export const SingleUser = (props) => {
  const id = parseInt(props.match.params.id, 10);
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    loadUser(id).then((data) => {
      setData(data.data);
    });
  }, []);

  return (
    <div>
      <Row>
        <Col span={4}></Col>
        <Col span={16}>
          <Title className="text-center my-3">Список пользователей</Title>
          <div className="user">
            <Avatar size={80} icon={<Image width={100} src={data.avatar} />} />
            <Title level={2}>{`${data.first_name} ${data.last_name}`}</Title>
          </div>
          
        </Col>
        <Col span={4}></Col>
      </Row>
    </div>
  );
};
