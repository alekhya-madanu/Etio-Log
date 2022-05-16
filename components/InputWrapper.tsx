import React, { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: string;
  register?: any;
  registerAs?: string;
  wrapperClass?: string;
  className?: string;
}

const Input: FC<InputProps> = ({
  register,
  registerAs ,
  name,
  error,
  label,
  wrapperClass,
  ...rest
}) => {
  return (
    <div className={wrapperClass ?? 'input-wrapper-default'}>
      {label && <label className="input-label" htmlFor={name}>{label}</label>}
      <input className="input-default"
        aria-invalid={error ? "true" : "false"}
        {...register(registerAs ?? name)}
        {...rest}
      />
      {error && <span role="alert" className="input-error">{error}</span>}
    </div>
  );
};

export default Input;
