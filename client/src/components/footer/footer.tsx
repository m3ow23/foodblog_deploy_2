import styles from './footer.module.scss';
import classNames from 'classnames';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';

export interface FooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-footers-and-templates
 */
export const Footer = ({ className }: FooterProps) => {

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.up}>
                <div className={styles.left}>
                    <img
                        src={
                            'https://static.overlay-tech.com/assets/a800f9aa-48a8-4e07-8ea0-524263edbc47.png'
                        }
                    />
                    <span className={styles.foodDesc}>
                        FoodBuddies is a dynamic food review website that offers an exciting
                        platform for discovering new and exciting foods.
                    </span>
                    <div className={styles.contactinfo}>
                        <div className={styles.contactIcons}>
                            <LocalPhoneOutlinedIcon />
                            <EmailOutlinedIcon />
                        </div>
                        <div className={styles.contactIcons}>
                            <span className={styles.contactinfotext}>123-456-7891</span>
                            <span>foodbuddies@email.com</span>
                        </div>
                    </div>
                    <div className={styles.socialIcons}>
                        <FacebookIcon sx={{ fontSize: 50, cursor: "pointer", color: "#4267B2"  }} />
                        <InstagramIcon sx={{ fontSize: 50, cursor: "pointer", color: "#C13584"  }} />
                        <TwitterIcon sx={{ fontSize: 50, cursor: "pointer", color: "#1D9BF0"  }} />
                    </div>
                </div>
                <div className={styles.quickContactContainer}>
                    <div className={styles.center}>
                        <div className={styles.ql}>
                            <h1 className={styles.quicklinks}>Quick Links</h1>
                            
                            <Link to={"/"} style={{textDecoration: "none", color: "black", textAlign: "start"}} >
                            <span className={styles.links}>Home</span>
                            </Link>
                            <Link to={"/about"} style={{textDecoration: "none", color: "black", textAlign: "start"}}>
                            <span className={styles.links}>About</span>
                            </Link>
                            <span className={styles.links}>Get Started</span>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <h1 className={styles.contactusheader}>Contact Us</h1>
                        <input className={styles.contactusemail} placeholder="email"/>
                        <textarea className={styles.textarea} placeholder="message"/>
                        <button className={styles.send} onClick={() => {window.location.reload()}}>Send</button>
                    </div>
                </div>
                
            </div>
            <div className={styles.down}>
                <span className={styles.allrights}>Created by</span>
                <span className={styles.allrights1}>Teletubbies</span>
                <span className={styles.allrights}>| © 2023 All rights Reserved</span>
            </div>
        </div>
    );
};
