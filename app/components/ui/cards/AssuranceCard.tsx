

const AssuranceCard = ({ name = "Assurance Name", detail = "Assurance Detail" }) => {
    return (
        <div className="flex flex-col gap-xs bg-secondary w-full py-sm px-md">
            <h3 className="text-md font-bold text-[var(--textLight)]">{name}</h3>
            <p>{detail}</p>
        </div>
    )
}

export default AssuranceCard;