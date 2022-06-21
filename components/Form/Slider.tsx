import React, { FC, InputHTMLAttributes } from "react";

interface SliderProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  register: any;
  error?: string;
  registerAs?: string;
  wrapperClass?: string;
  className?: string;
}

const Slider: FC<SliderProps> = ({
  register,
  registerAs ,
  name,
  min, 
  max,
  step,
  error,
  label,
  wrapperClass,
  ...rest
}) => {
  return (
    <div className={wrapperClass ?? 'input-wrapper-default'}>
      {label && <label className="input-label" htmlFor={name}>{label}</label>}
      <div className="flex w-full">
        <span className="mr-2"> {min} </span>
        <span className="flex-grow my-auto">
            <input type="range" 
                min={min} max={max} step={step}
                className="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                aria-invalid={error ? "true" : "false"}
                {...register(registerAs ?? name)}
                {...rest}
            />
        </span>
        <span className="ml-2"> {max} </span>
      </div>
      {error && <span role="alert" className="input-error">{error}</span>}
    </div>
  );
};

export default Slider;