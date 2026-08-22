import styles from './home.module.scss';
const HomeTitle = ({ text }) => {
    return (
        <div className={styles.titleContainer}>
            <div className={styles.design}></div>
            <h1 className={styles.title}>{text}</h1>
            <div className={styles.design}></div>
        </div>
    )
}

export default HomeTitle
