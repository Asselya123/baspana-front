import { Button, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { login } from "../../../api";

export default function LoginPage() {
  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    const response = await login(values);
    localStorage.setItem("token", response.access);
    navigate("/");
  };

  return (
    <div>
      LoginPage
      <div className="flex justify-center">
        <div>
          <Typography.Title level={2}>
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
    </div>
  );
}
