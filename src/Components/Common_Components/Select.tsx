import { FC } from "react";
import { Select, Option } from "@material-tailwind/react";

interface CustomSelectProps {
  label: string;
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

const CustomSelect: FC<CustomSelectProps> = ({
  label,
  options,
  placeholder,
  value,
  onChange,
  ...rest
}) => {
  return (
    <div className="w-72">
      <Select
        color="orange"
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        label={label}
        value={value}
        onChange={(e: any) => onChange && onChange(e)}
        placeholder={placeholder}
        {...rest}
      >
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default CustomSelect;
