import React from 'react';
import styles from '../assets/styles/header.module.css';
import Button from "../ui/Button";

const Header = () => {
    return (
        <div className={styles.container}>
            <Button className={styles.btnDownloadNow} content={'Download Now!'}/>
            <div className={styles.content}>
                <h1>HTML Image Gallery</h1>
                <p className={styles.paragraph}>
                    Right here you can see bu uourself how exactly the HTML Image Gallery
                    should look like.Feel free to use these awesome,
                    super customizable and mobile-friendly gelleries to make your website more interesting and
                    appealing for its visitors
                </p>
                <Button className={styles.btnDownload} content={'Download Gallery'}/>

            </div>
        </div>

    );
};

export default Header;