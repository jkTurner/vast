import Image from "next/image";

interface CommentBoxProp {
    name: string;
    image: string;
    comment: string;
}

const CommentBox: React.FC<CommentBoxProp> = ({ name="User Name", image = "", comment = "Say something here..."}) => {
    return (
        <div className="flex bg-[var(--secondary)] mt-sm px-sm py-md gap-sm items-start">
            <div className="w-2xl h-2xl rounded-full overflow-hidden relative">
                <Image
                    src={image}
                    alt={name}
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            <div className="flex-1 flex flex-col gap-xxs">
                <span className="text-[var(--textLight)] text-md font-bold">{name}</span>
                <p className="text-[var(--textLight)]">{comment}</p>
            </div>
        </div>
    )
}

export default CommentBox;