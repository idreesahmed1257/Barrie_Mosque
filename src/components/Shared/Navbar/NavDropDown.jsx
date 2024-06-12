import { Grid } from '@mui/material';
import styles from './navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Button2 from '../Buttons/Button2';

const NavDropDown = ({ width, image, items, buttons }) => {
    return (
        <div style={{ width: width }} className={`${styles.dropdown}`}>
            <Grid container>
                <Grid item md={6} className='col-center'>
                    <Image src={image} width={290} height={300} />
                </Grid>
                <Grid py={2} container display={'flex'} flexDirection={'column'} gap={1} justifyContent={'space-evenly'} item md={6}>
                    <div>
                        {items?.map((item, idx) => (
                            <Link key={idx} href={item?.ref} className={styles.dropdownLink}>
                                <p>{item?.title}</p>
                                <p>{item?.subTitle}</p>
                            </Link>
                        ))}
                    </div>
                    <div className='row-around'>
                        {buttons?.length && buttons?.map((btn, idx) => (
                            <Button2 key={idx} onClick={btn?.onClick}>{btn?.label}</Button2>
                        ))}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default NavDropDown
