import { Form, Input } from "antd";

type CustomInputProps = {
  label: string;
  name: string;
  placeholder: string;
  rules?: object[];
  className?: string;
};

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  name,
  placeholder,
  rules,
  className,
}) => {
  return (
    <Form.Item label={label} name={name} rules={rules} className={className}>
      <Input placeholder={placeholder} className='rounded-[2px]' />
    </Form.Item>
  );
};

export default CustomInput;
