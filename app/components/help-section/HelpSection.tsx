import HelpForm from "./HelpForm";


const HelpSection = () => {
    return (
        <div className="flex w-full gap-sm px-sm">
            
            {/* Left Column */}
            <div className="flex flex-col w-[25%]">
                <h4 className="text-2xl font-bold text-[var(--primary)]">Need Help?</h4>
                <h4 className="text-2xl font-bold text-[var(--primary)]">Let&apos;s Talk</h4>
            </div>

            {/* Right Column */}
            <div className="flex-1 bg-[var(--secondary)]">
                <HelpForm />
            </div>

        </div>
    )
}

export default HelpSection;