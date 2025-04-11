import MainButton from "../buttons/MainButton";

interface SectionHeaderProps {
    sectionName: string;
    showButton?: boolean;
    buttonText?: string;
}

const SectionHeader:React.FC<SectionHeaderProps> = ({sectionName, showButton = true, buttonText = "View All"}) => {
    return (
        <div className="flex flex-col justify-between w-full max-w-[1280px] gap-sm my-md md:my-2xl">
            <div className="flex justify-between w-full px-sm">
                <h2 className="font-normal text-[var(--textLight)] text-base">{sectionName}</h2>

                {showButton && (
                    <MainButton name={buttonText} weight="font-light" />
                )}
            </div>
            <div className="h-[1px] w-full">
                <div className="h-full bg-[var(--textKill)] md:mx-sm" />
            </div>
        </div>
    )
}

export default SectionHeader;