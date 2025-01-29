import { Grid } from "@mui/material";
import styles from "./navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import Button2 from "../Buttons/Button2";

const NavDropDown = ({ width, image, items }) => {
    return (
        <div style={{ width: width }} className={`${styles.dropdown}`}>
            <Grid container>
                <Grid item md={6} className="col-center">
                    <Image src={image} width={290} className={styles.image} />
                </Grid>
                <Grid py={2} container display="flex" flexDirection="column" gap={1} justifyContent="space-evenly" item md={6}>
                    {items?.map((item, idx) => (
                        <div key={idx} className={styles.dropdownItem}>
                            <Link href={item?.ref} className={styles.dropdownLink}>
                                <p>{item?.title}</p>
                                <p>{item?.subTitle}</p>
                            </Link>
                            {item?.subMenu && item.subMenu.length > 0 && (
                                <div className={styles.subMenu}>
                                    {item.subMenu.map((subItem, subIdx) => (
                                        <Link key={subIdx} href={subItem?.ref} className={styles.subMenuLink}>
                                            <p>{subItem?.title}</p>
                                            <p>{subItem?.subTitle}</p>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </Grid>
            </Grid>
        </div>
    );
};

export default NavDropDown;
