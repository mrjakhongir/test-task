import { Button } from "antd";
import Container from "../../components/container/Container";
import { RxExit } from "react-icons/rx";
import { useState } from "react";
import FormModal from "./FormModal";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

const DashboardHeader = () => {
  const [openModal, setOpenModal] = useState(false);
  const { logoutUser } = useLocalStorage();
  const navigate = useNavigate();
  return (
    <header className='bg-[#313131]'>
      <Container className='flex justify-between items-center p-4'>
        <h1 className='text-white text-smjfont-semibold'>Компании</h1>
        <div className='flex items-center gap-3'>
          <RxExit
            className='cursor-pointer rotate-180'
            color='white'
            size={20}
            onClick={() => {
              logoutUser("isLoggedIn");
              navigate("/auth");
            }}
          />
          <Button
            type='primary'
            variant='filled'
            className='bg-[#08979C] hover:!bg-[#08979C99] text-white rounded-[2px]'
            onClick={() => setOpenModal(true)}
          >
            Добавить компания
          </Button>
        </div>
      </Container>
      <FormModal open={openModal} setOpen={setOpenModal} role='Добавить' />
    </header>
  );
};

export default DashboardHeader;
