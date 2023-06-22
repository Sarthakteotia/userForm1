import { useState } from "react";
import { Button, Form, Input, Modal, Typography } from "antd";
import { useNavigate } from "react-router";
import { useUserStore } from "../utils/store";
import { useForm } from "antd/es/form/Form";

function User() {
  const users = useUserStore((state) => state.users);
  const deleteUser = useUserStore((state) => state.deleteUser);
  const navigate = useNavigate();
  const [userform] = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (user) => {
    userform.resetFields();
    userform.setFieldsValue(user);
    setIsModalOpen(true);
  };
  const editUser = useUserStore((state) => state.editUser);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    editUser(values.userId, values);
    setIsModalOpen(false);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="flex flex-col p-10 bg-slate-100 h-screen">
        <div className="flex flex-row">
          <Typography.Title>List of Users</Typography.Title>
          <Button
            type="primary"
            size="large"
            className="ml-auto flex justify-end"
            onClick={() => navigate("add")}
          >
            + Add User
          </Button>
        </div>
        <div className="flex flex-wrap gap-8">
          {users.map((user) => (
            <div
              key={user.userId}
              className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{user.name}</div>
                <p className="text-gray-700 text-base">Email: {user.email}</p>
                <p className="text-gray-700 text-base">Phone: {user.phone}</p>
              </div>
              <div className="px-6 py-4 flex justify-between">
                <Button type="primary" onClick={() => showModal(user)}>
                  Edit
                </Button>
                <Button
                  type="primary"
                  className="bg-blue-600"
                  onClick={() => deleteUser(user.userId)}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        title="Edit User"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="UserEditForm"
          onFinishFailed={onFinishFailed}
          form={userform}
          onFinish={onFinish}
          layout="vertical"
          className="mt-11 bg-white  "
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "This field is required." }]}
          >
            <Input placeholder="Enter You name" />
          </Form.Item>
          <Form.Item hidden name="userId" />
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
      </Modal>
    </>
  );
}

export default User;
