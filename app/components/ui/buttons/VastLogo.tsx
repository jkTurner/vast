import Link from "next/link"
import styles from "./button.module.css"

const VastLogo = () => {
  return (
    <Link href="/" className="cursor-pointer">
      <h1 className={`text-2xl md:text-4xl font-extrabold ${styles.logoHover}`}>
        VAST
      </h1>
    </Link>
  )
}

export default VastLogo
