import { forwardRef } from "react";

export const Input = forwardRef<
  HTMLInputElement,
  {
    labelText: string;
    placeholder: string;
    name: string;
    value: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
>(({ labelText, placeholder, name, value, onChange }, ref) => {
  return (
    <div className="input-field">
      <label className="input-field__input-label" htmlFor="inputField">
        {labelText}
      </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="input-field__input-area"
        type="text"
        id="inputField"
        placeholder={placeholder}
        ref={ref}
      />
    </div>
  );
});

export default Input;
