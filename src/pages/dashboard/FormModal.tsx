import CompanyForm from "../../components/companyForm/CompanyForm";
import { Modal } from "antd";

type FormModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  role: string;
};

const FormModal: React.FC<FormModalProps> = ({ setOpen, open, role }) => {
  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
      className='rounded-[2px]'
    >
      <CompanyForm role={role} />
    </Modal>
  );
};

export default FormModal;
