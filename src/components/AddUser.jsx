import { Button, Col, Form, Input, Row, Typography, message } from "antd";
import { useUserStore } from "../utils/store";
import { useId } from "react";
import { useNavigate } from "react-router";

function AddUser() {
  const navigate = useNavigate();
  const addUser = useUserStore((state) => state.addUser);
  const userID = useId();
  const onFinish = (values) => {
    console.log("Success:", values);
    addUser({ userId: userID, ...values });
    message.success("User added succesfully");
    navigate("/");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="flex flex-col justify-center items-center  w-screen h-screen bg-gray-50">
      <Typography.Title>Add a new User </Typography.Title>
      <Form
        name="UserDetailForm"
        onFinishFailed={onFinishFailed}
        onFinish={onFinish}
        layout="vertical"
        className="mt-11 bg-white p-10 w-[500px]"
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "This field is required." }]}
        >
          <Input placeholder="Enter You name" />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Contact Number"
          rules={[
            { required: true, message: "This field is required." },
            {
              pattern: "^[0-9-+/s]{9,}$",
              min: 9,
              message: "Please enter min 9 digit Number",
            },
          ]}
        >
          <Input
            style={{ width: "100%" }}
            placeholder="Enter your Phone Number"
          />
        </Form.Item>

        <Form.Item
          label="Email Address"
          name="email"
          rules={[
            { required: true, message: "This field is required." },
            {
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "Please enter valid  email",
            },
          ]}
        >
          <Input placeholder="Enter Your Email" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddUser;
