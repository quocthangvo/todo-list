import type { cardProps } from "../../utils/props/components/common/Card";

const Card = ({ children, classNameBackground }: cardProps) => {
  return (
    <div
      className={`${
        classNameBackground ? classNameBackground : "bg-white "
      }  box-content shadow-lg shadow-indigo-500/10 px-5 py-5 dark:bg-[#202940]`}
    >
      {children}
    </div>
  );
};

export default Card;
