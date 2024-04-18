import styles from "./ImgText.module.css";

const ImgText = ({ text }) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src="LogoHorizon.jpg" alt="stockImg" />
            
            <p className={styles.text}>{text}</p>
        </div>
    );
}

export default ImgText;
