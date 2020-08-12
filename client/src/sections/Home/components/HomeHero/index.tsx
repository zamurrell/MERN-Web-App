import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Input, Row, Typography } from "antd";

import puertoVallartaImage from "../../assets/puerto-vallarta.jpg";
import seoulImage from "../../assets/seoul.jpg";
import losAngelesImage from "../../assets/los-angeles.jpg";
import sydneyImage from "../../assets/sydney.jpg";

const { Title } = Typography;
const { Search } = Input;

interface Props {
  onSearch: (value: string) => void;
}

export const HomeHero = ({ onSearch }: Props) => {
  return (
    <div className="home-hero">
      <div className="home-hero__search">
        <Title className="home-hero__title">
          Find a place to make your trip unforgettable - worldwide
        </Title>
        <Search
          placeholder="Search 'San Fransisco'"
          size="large"
          enterButton
          className="home-hero__search-input"
          onSearch={onSearch}
        />
      </div>
      <Row gutter={12} className="home-hero__cards">
        <Col xs={12} md={6}>
          <Link to="/listings/los%20angeles">
            <Card cover={<img alt="Los Angeles" src={losAngelesImage} />}>
              Los Angeles
            </Card>
          </Link>
        </Col>
        <Col xs={12} md={6}>
          <Link to="/listings/seoul">
            <Card cover={<img alt="Seoul" src={seoulImage} />}>Seoul</Card>
          </Link>
        </Col>
        <Col xs={12} md={6}>
          <Link to="/listings/puerto%20vallarta">
            <Card cover={<img alt="Dubai" src={puertoVallartaImage} />}>
              Puerto Vallarta
            </Card>
          </Link>
        </Col>
        <Col xs={12} md={6}>
          <Link to="/listings/sydney">
            <Card cover={<img alt="London" src={sydneyImage} />}>Sydney</Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};
