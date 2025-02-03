import cn from "classnames";

type FormTitleProps = {
  title: string;
  className?: string;
};

const FormTitle: React.FC<FormTitleProps> = ({ title, className }) => {
  return (
    <h1
      className={cn(className, "text-4xl font-semibold text-start text-black")}
    >
      {title}
    </h1>
  );
};

export default FormTitle;
