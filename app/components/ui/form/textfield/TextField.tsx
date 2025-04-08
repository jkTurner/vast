import MainButton from "../../buttons/MainButton";

interface TextFieldProp {
    placeholder?: string;
    buttonName?: string;
}

const TextField: React.FC<TextFieldProp> = ({ placeholder = "Write your text...", buttonName = "Click Me"}) => {
    return (
        <div className="flex flex-col bg-[var(--secondary)] p-sm gap-sm">
            <textarea 
                className="flex bg-[var(--bgMain)] w-full min-h-[120px] p-4 text-[var(--primary)] placeholder-[var(--textKill)]" 
                name="comment"
                placeholder={placeholder}
            />
            <div className="self-end">
                <MainButton name={buttonName} />
            </div>
        </div>
    )
}

export default TextField;