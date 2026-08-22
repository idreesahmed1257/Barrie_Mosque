import styles from './home.module.scss';
const HomeTitle = ({ text, as = 'h1' }) => {
    const HeadingTag = as;
    return (
        <div className={styles.titleContainer}>
            <div className={styles.design}></div>
            <HeadingTag className={styles.title}>{text}</HeadingTag>
            <div className={styles.design}></div>
        </div>
    )
}

export default HomeTitle
