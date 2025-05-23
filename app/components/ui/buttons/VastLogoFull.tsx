import Link from "next/link"
// import styles from "./button.module.css"

const VastLogoFull = () => {
  return (
    <div className="flex flex-col w-fit items-center">
        <Link href="/" className="cursor-pointer">
            <h1 className="text-xl font-extrabold text-[var(--secondary)]">
                VAST
            </h1>
            <span className="text-[var(--secondary)] tracking-[3px]">ORIGINAL</span>
        </Link>
    </div>
  )
}

export default VastLogoFull
