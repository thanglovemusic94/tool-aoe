import Home from 'app/modules/home/home';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'reactstrap';
import { Rate } from 'antd';

export const AoeHome = () => {
  const [dieuR, setDieuR] = useState(0);

  function onchangeRate(number) {
    setDieuR(number);
  }
  useEffect(() => {});
  console.log(dieuR);
  return (
    <>
      <Container>
        <Row>
          <Col sm={12}>
            <div>
              <b className={'me-3'}>FioRuna</b>

              <span className={'me-3'}>Điều R</span>
              <Rate
                className={'me-3'}
                onChange={onchangeRate}
                count={10}
                defaultValue={2}
                character={({ index }: { index: number }) => index + 1}
              />
              <span className={'me-3'}>Chiến Thuật</span>
              <Rate
                className={'me-3'}
                onChange={onchangeRate}
                count={10}
                defaultValue={2}
                character={({ index }: { index: number }) => index + 1}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AoeHome;
