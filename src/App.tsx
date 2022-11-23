import React from "react";
import { Card, Col, Divider, Row } from "antd";
import {
  BoldOutlined,
  BugOutlined,
  HeartOutlined,
  TabletOutlined,
  TagsOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";

import useDidMountEffect from "./components/useDidMountEffect";
import useCommunication from "./redux/useHook/useCommunication";
import Meta from "antd/lib/card/Meta";

export function App() {
  const { actions, data, loading } = useCommunication();

  useDidMountEffect(() => {
    actions.fetchList();
  }, []);

  const mainCategories = [
    {
      title: "Bảng phiên âm (IPA)",
      desc: "Luyện nghe, phát âm chuẩn với 44 âm trong bảng phiên âm quốc tế IPA",
      icon: <BoldOutlined />,
    },
    {
      title: "1000+ câu giao tiếp",
      desc: "Luyện nghe, nói tiếng anh giao tiếp hàng ngày cùng appReact",
      icon: <UsergroupAddOutlined />,
    },
    {
      title: "Từ vựng với flashcard",
      desc: "FlashCard phương pháp học từ vựng nổi tiếng, nay hoàn toàn miễn phí trên app appReact",
      icon: <TagsOutlined />,
    },
    {
      title: "Từ vựng toeic",
      desc: "Các từ vựng thường gặp trong đề thi toeic",
      icon: <TabletOutlined />,
    },
    {
      title: "Từ vựng yêu thích của bạn",
      desc: "Danh sách từ vựng yêu thích mà bạn đã lưu",
      icon: <HeartOutlined />,
    },
    {
      title: "Động từ bất quy tắc",
      desc: "Danh sách tất cả động từ bất quy tắc trong tiếng anh",
      icon: <BugOutlined />,
    },
  ];

  return (
    <div>
      This is Bottom
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {mainCategories.map((item, index) => {
          return (
            <Col
              key={index}
              className="gutter-row"
              xs={24}
              sm={12}
              md={12}
              lg={8}
              xl={8}
            >
              <Card style={{ maxWidth: 350, marginTop: 16, minHeight: 140 }}>
                <Meta
                  avatar={item.icon}
                  title={item.title}
                  description={item.desc}
                />
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default App;
