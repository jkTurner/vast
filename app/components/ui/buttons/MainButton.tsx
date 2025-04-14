import styles from './button.module.css'

interface MainButtonProps {
    name: string
    weight?: 'font-thin' | 'font-light' | 'font-normal';
    background?: 'var(--primary)' | 'var(--accent)' ;
    onClick?: () => void;
}

const MainButton: React.FC<MainButtonProps> = ({ name, weight = 'font-light', background = "var(--primary)", onClick }) => {
    return (
        <button
			onClick={onClick}
            className={`
                px-[12px] py-[6px] md:px-[16px] md:py-[8px]
                text-[var(--secondary)] bg-[${background}] text-xxs ${weight}
                relative overflow-hidden cursor-pointer ${styles.shimmerButton}`}
            >
            {name}
        </button>
    )
}

export default MainButton