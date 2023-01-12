import styles from "./Layout.module.css";

export const Layout = ({ children }) => {

    return (
        <>
            <div className={styles.navbar}>
                <ul className={styles.menu}>
                    <li><span>Home</span></li>
                    <li><span>Content</span></li>
                    <li><span>About</span></li>
                </ul>
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </>
    );
};