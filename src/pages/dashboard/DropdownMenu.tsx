import { EllipsisOutlined, ExclamationCircleFilled } from "@ant-design/icons";
import { Dropdown, MenuProps, Modal } from "antd";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import EditModal from "./FormModal";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

type DropdownMenuProps = {
  companyId: string;
};

const { confirm } = Modal;

const DropdownMenu: React.FC<DropdownMenuProps> = ({ companyId }) => {
  const [open, setOpen] = useState(false);

  const items: MenuProps["items"] = [
    {
      label: (
        <div onClick={() => setOpen(true)} className='flex items-center gap-2'>
          <FaRegEdit />
          <span>Редактировать</span>
        </div>
      ),
      key: "edit",
    },
    {
      label: (
        <div
          onClick={() => showConfirm(companyId)}
          className='flex items-center gap-2'
        >
          <FaRegTrashAlt />
          <span>Удалить</span>
        </div>
      ),
      key: "delete",
      danger: true,
    },
  ];

  const showConfirm = (id: string) => {
    confirm({
      title: "Удалить компанию?",
      icon: <ExclamationCircleFilled />,
      okText: "Да",
      cancelText: "Нет",
      onOk() {
        mutate(id);
      },
    });
  };

  const { mutate } = useMutation({
    mutationKey: ["companies"],
    mutationFn: async (id: string) => {
      const response = await fetch(
        `http://45.138.158.137:92/api/companies/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
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

  return (
    <>
      <Dropdown trigger={["click"]} menu={{ items }}>
        <EllipsisOutlined
          style={{ fontSize: "20px", cursor: "pointer" }}
          className='rotate-90 hover:text-blue-500'
        />
      </Dropdown>
      <EditModal setOpen={setOpen} open={open} role='Редактировать' />
    </>
  );
};

export default DropdownMenu;
