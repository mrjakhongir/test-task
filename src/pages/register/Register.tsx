import CustomInput from "../../components/customInput/CustomInput";
import FormTitle from "../../components/formTitle/FormTitle";
import { Button, Form, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

interface UserData {
  fullName: string;
  login: string;
  password: string;
}

const Register = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationKey: ["users"],
    mutationFn: async (values: UserData) => {
      const response = await fetch(
        "http://45.138.158.137:92/api/auths/sign-up",
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    },
    onSuccess: (data) => {
      if (data.ok) {
        navigate("/auth/");
      }
    },
    onError: (error) => {
      console.error("Error:", error);
    },
  });

  const onFinish = (values: UserData) => {
    mutate(values);
  };

  return (
    <div className='grid place-items-center min-h-screen'>
      <Form
        layout='vertical'
        className='w-[90%] max-w-[462px] p-0 bg-white rounded-[2px]'
        onFinish={onFinish}
      >
        <Space className='flex px-6 pt-6' direction='vertical'>
          <FormTitle title='Регистрация' className='mb-2' />
          <CustomInput
            label='Ф.И.О'
            name='fullName'
            placeholder='Введите Ф.И.О'
            rules={[{ required: true, message: "Пожалуйста введите Ф.И.О" }]}
            className='mb-3'
          />
          <CustomInput
            label='Логин'
            name='login'
            placeholder='Введите логин'
            rules={[{ required: true, message: "Пожалуйста введите логин" }]}
            className='mb-3'
          />
          <CustomInput
            label='Пароль'
            name='password'
            placeholder='Введите пароль'
            rules={[{ required: true, message: "Пожалуйста введите пароль" }]}
            className='mb-3'
          />
          <Link to='..' className='text-[#1890FF] text-sm mb-2 inline-block'>
            Вход
          </Link>
        </Space>

        <Form.Item label={null} className='m-0'>
          <Space className='w-full flex justify-center items-center py-2.5 border-t'>
            <Button
              htmlType='submit'
              color='green'
              variant='solid'
              className='text-sm rounded-[2px]'
              disabled={isPending}
            >
              {isPending ? "Загрузка..." : "Регистрация"}
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
