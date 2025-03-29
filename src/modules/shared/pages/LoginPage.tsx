import { Button, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";

export default function LoginPage() {
  const navigate = useNavigate();

  const onFinish = async () => {
    // const response = await login(values);
    // localStorage.setItem("token", response.access);
    navigate("/profile");
  };

  return (
    <Layout>
      <div className="py-10 mx-auto w-max">
        <Typography.Title level={3}>
          Войти или зарегистрироваться
        </Typography.Title>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="username" label="Имя пользователя">
            <Input name="username" placeholder="Имя пользователя" />
          </Form.Item>
          <Form.Item name="password" label="Пароль">
            <Input.Password name="password" placeholder="Пароль" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Войти
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Layout>
  );
}
