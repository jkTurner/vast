import { LineIcon, WhatsappIcon } from "@/assets/Icons";

interface ChatButtonProps {
    isLine?: boolean;
}

const ChatButton: React.FC<ChatButtonProps> = ({ isLine = true, }) => {
    return (
        <button className="flex items-center justify-between px-sm cursor-pointer
            bg-[var(--primary)] text-[var(--secondary)] font-extralight py-xs
            hover:bg-[var(--accent)]"
        >
            { isLine ? "Chat via LINE" : "Chat via Whatsapp" }
            {isLine ? <LineIcon color="var(--secondary)" size={36} /> : <WhatsappIcon color="var(--secondary)" size={36} />}
            
        </button>
    )
}

export default ChatButton;