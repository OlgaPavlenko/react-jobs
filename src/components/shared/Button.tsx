import { ButtonHTMLAttributes, DOMAttributes, FC } from "react";

import { IconType } from "react-icons";

interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    DOMAttributes<HTMLButtonElement> {
  name?: string;
  badgeSrc?: string;
  iconBtn?: IconType;
  className?: string;
  alt?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: FC<IButtonProps> = ({
  name,
  badgeSrc,
  className,
  alt,
  onClick,
}) => {
  return (
    <button name={name} className={className} onClick={onClick}>
      {!!badgeSrc && <img src={badgeSrc} alt={alt} />}
      {!!name && <p>{name}</p>}
    </button>
  );
};
