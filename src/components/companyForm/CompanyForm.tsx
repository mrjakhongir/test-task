import { useMutation } from "@tanstack/react-query";
import CustomInput from "../../components/customInput/CustomInput";
import FormTitle from "../../components/formTitle/FormTitle";
import { Button, Form, Space } from "antd";

type CompanyFormProps = {
  role: string;
};

interface CompanyData {
  name: string;
  count: number;
}
const CompanyForm: React.FC<CompanyFormProps> = ({ role }) => {
  let method = "POST";
  let url = "add";
  if (role === "Редактировать") {
    method = "PUT";
    url = "update";
  }
  const { mutate, isPending } = useMutation({
    mutationKey: ["companies"],
    mutationFn: async (values: CompanyData) => {
      const response = await fetch(
        `http://45.138.158.137:92/api/companies/${url}`,
        {
          method: method,
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            // by now there is no token
          },
        }
      );
      return response;
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error("Error:", error);
    },
  });
  const onFinish = (values: CompanyData) => {
    mutate(values);
  };

  return (
    <Form layout='horizontal' className='py-0' onFinish={onFinish}>
      <Space className='flex' direction='vertical' size={12}>
        <FormTitle title={`${role} компании`} className='mb-2 text-xl' />
        <CustomInput
          label='Названия компании'
          name='name'
          placeholder='Введите названия'
          className='mb-3'
        />
        <CustomInput
          label='Количество сотрудников'
          name='count'
          placeholder='Введите количество'
          className='mb-3'
        />
      </Space>

      <Form.Item label={null} className='m-0'>
        <Space className='w-full flex justify-center items-center pt-2.5 border-t'>
          <Button
            htmlType='submit'
            variant='solid'
            type='primary'
            className='text-sm rounded-[2px]'
          >
            {isPending ? "Загрузка..." : `${role} компания`}
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default CompanyForm;
