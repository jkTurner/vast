interface InputFieldProps {
    label?: string;
    id?: string;
    inputValue: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
}

const InputField: React.FC<InputFieldProps> = ({ label, id, inputValue, onChange, disabled = false, type = "text", ...rest }) => {
    return (
        <div className="flex flex-col gap-xxs">

            {label && (
                <label 
                    htmlFor={id || undefined}
                    className="text-[var(--textLight)] font-semibold text-sm"
                >{label}</label>
            )}
            <input
                id={id || undefined}
                type={type}
                value={inputValue}
                onChange={onChange}
                className="input-block"
                disabled={disabled}
                {...rest} // this includes placeholder, autoComplete, maxLength, etc.
            />
        </div>
    )
}

export default InputField;