import React, { Fragment } from "react";
import { Input, Popover, Form } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const CommonHeaderSearch = ({ text, dataIndex, onSearch = () => null, type }) => {
  const [form] = Form.useForm();

  const onHandleSearch = () => {
    const val = form.getFieldValue(dataIndex);
    val && onSearch(dataIndex, val)
  };
  return (
    <div>
      <div>{text}</div>
      <Popover
        content={
          <Form form={form}>
            <Form.Item name={dataIndex}>
              <Input name addonAfter={<SearchOutlined onClick={onHandleSearch} />} />
            </Form.Item>
          </Form>
        }
        trigger="click"
      >
        <SearchOutlined />
      </Popover>
    </div>
  );
};

CommonHeaderSearch.propTypes = {};

export default CommonHeaderSearch;
