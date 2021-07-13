import React, { ButtonHTMLAttributes } from 'react';

import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  isOutlined,
  ...props
}: ButtonProps) => (
  <button
    type="button"
    className={`button ${isOutlined && 'outlined'}`}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
);

Button.defaultProps = {
  isOutlined: false
};

export default Button;
