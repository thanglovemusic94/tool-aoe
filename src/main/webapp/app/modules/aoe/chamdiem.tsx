import AoeHome from 'app/modules/aoe/aoe-home';
import { Tabs, TabsProps } from 'antd';
import { Container } from 'reactstrap';
import React from 'react';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Điều R`,
    children: `Content of Tab Pane 1`,
  },
  {
    key: '2',
    label: `Chiến Thuật`,
    children: `Content of Tab Pane 2`,
  },
  {
    key: '3',
    label: `Thao tác tay`,
    children: `Content of Tab Pane 3`,
  },

  {
    key: '4',
    label: `Ép đời`,
    children: `Content of Tab Pane 3`,
  },
  {
    key: '5',
    label: `Phát triển`,
    children: `Content of Tab Pane 3`,
  },
];

export const Chamdiem = () => {
  return (
    <Container>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
    </Container>
  );
};

export default Chamdiem;
