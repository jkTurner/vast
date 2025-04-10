import ChatButton from "../ui/buttons/ChatButton";
import HelpForm from "./HelpForm";


const HelpSection = () => {
    return (
        <div className="flex lg:flex-row flex-col w-full gap-sm px-sm">
            
            {/* Left Column */}
            <div className="flex lg:flex-col flex-row lg:w-[25%] w-full lg:justify-end justify-between gap-sm">
                <div className="flex flex-col gap-xs">
                    <div className="flex flex-col">
                        <h4 className="text-xl font-bold text-[var(--primary)]">Need Help?</h4>
                        <h4 className="text-xl font-bold text-[var(--primary)]">Let&apos;s Talk</h4>
                    </div>
                    {/* <div className="h-[1px] w-full bg-[var(--textKill)]" /> */}
                    <p className="text-[var(--textLight)] text-sm">
                        Our team is happy to help. Reach out via chat or send us a message. We&apos;ll get back to you within 24 hours.
                    </p>
                </div>
                <div className="flex flex-col gap-xs min-w-[250px] justify-end">
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