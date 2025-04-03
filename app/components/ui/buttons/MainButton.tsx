import styles from './button.module.css'

interface MainButtonProps {
  name: string
  weight?: 'font-thin' | 'font-light' | 'font-normal';
  background?: 'bg-primary' | 'bg-accent' ;
}

const MainButton: React.FC<MainButtonProps> = ({ name, weight = 'font-normal', background = "bg-primary" }) => {
  return (
    <button
      className={`px-[16px] py-[8px] text-secondary ${background} text-sm ${weight} relative overflow-hidden cursor-pointer ${styles.shimmerButton}`}
    >
      {name}
    </button>
  )
}

export default MainButton
