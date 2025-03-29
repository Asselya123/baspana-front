import { Button, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function LoginPage() {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    // const response = await login(values);
    // localStorage.setItem("token", response.access);
    navigate("/profile");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex justify-center grow">
        <div className="py-10">
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
      </div>
      <Footer />
    </div>
  );
}
