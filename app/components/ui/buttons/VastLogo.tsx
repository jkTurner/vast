import Link from "next/link"
import styles from "./button.module.css"

const VastLogo = () => {
  return (
    <Link href="/" className="cursor-pointer">
      <h1 className={`text-lg md:text-xl font-extrabold text-[var(--primary)] ${styles.logoHover}`}>
        VAST
      </h1>
    </Link>
  )
}

export default VastLogo
