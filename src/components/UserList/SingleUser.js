import React from "react";
import { Avatar, Image, Typography, Row, Col, Button } from "antd";
import { loadUser } from "./actions";
import "./SingleUser.css";
import { LeftOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

const { Title } = Typography;

export const SingleUser = (props) => {
  const history = useHistory();
  const id = parseInt(props.match.params.id, 10);
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    loadUser(id).then((data) => {
      setData(data.data);
    });
  }, []);

  function handleBack() {
    history.push(`/users`);
  }

  return (
    <div>
      <Title className="text-center my-3">Страница пользователя</Title>
      <Row>
        <Col span={4}>
          <div className="navigationButton navigationButton-right">
          <Button type="primary" className="button" onClick={handleBack}><LeftOutlined />Назад</Button>
          </div>
        </Col>
        <Col span={16}>
          <div className="user">
            <Avatar size={80} icon={<Image width={100} src={data.avatar} />} />
            <Title
              level={2}
              className="user__name"
            >{`${data.first_name} ${data.last_name}`}</Title>
            <Title level={3} className="user__name">
              {`Email: `}
              <span className="normal-text">{`${data.email}`}</span>
            </Title>
          </div>
        </Col>
        <Col span={4}></Col>
      </Row>
    </div>
  );
};
