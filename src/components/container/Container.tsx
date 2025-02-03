import cn from "classnames";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn("max-w-[1440px] mx-auto px-4", className)}>
      {children}
    </div>
  );
};

export default Container;
