import ChatButton from "../ui/buttons/ChatButton";
import HelpForm from "./HelpForm";


const HelpSection = () => {
    return (
        <div className="flex w-full gap-sm px-sm">
            
            {/* Left Column */}
            <div className="flex flex-col w-[25%] justify-end gap-sm">
                <div>
                    <h4 className="text-2xl font-bold text-[var(--primary)]">Need Help?</h4>
                    <h4 className="text-2xl font-bold text-[var(--primary)]">Let&apos;s Talk</h4>
                </div>
                {/* <div className="h-[1px] w-full bg-[var(--textKill)]" /> */}
                <p className="text-[var(--textLight)] text-md">
                    Our team is happy to help. Reach out via chat or send us a message. We&apos;ll get back to you within 24 hours.
                </p>
                <div className="flex flex-col gap-xs">
                    <ChatButton />
                    <ChatButton isLine={false} />
                </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 bg-[var(--secondary)]">
                <HelpForm />
            </div>

        </div>
    )
}

export default HelpSection;