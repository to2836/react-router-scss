import React from 'react';
import styles from 'styles/Header.scss';
import logo from 'img/vomit.png';


const Header = () => {
    return (
        <div className={styles.header}>
            <img className={styles.logo} src={logo} alt="vomit.png"></img>
            <nav>
                <ul className={styles.menue}>
                    <li className={styles.left}>About</li>
                    <li className={styles.left}>불편함</li>
                    <li className={styles.left}>이번달 불편함</li>
                </ul>
                <ul className={styles.menue}>
                    <li className={styles.right}>회원가입</li>
                    <li className={styles.right}>로그인</li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;