import styles from './button.module.css'

interface MainButtonProps {
  name: string
  weight?: 'font-thin' | 'font-light' | 'font-normal';
  background?: 'bg-primary' | 'bg-accent' ;
}

const MainButton: React.FC<MainButtonProps> = ({ name, weight = 'font-normal', background = "bg-primary" }) => {
  return (
    <button
      className={`px-[12px] py-[6px] md:px-[16px] md:py-[8px] text-secondary ${background} text-sm ${weight} relative overflow-hidden cursor-pointer ${styles.shimmerButton}`}
    >
      {name}
    </button>
  )
}

export default MainButton
