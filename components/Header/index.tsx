import styles from './styles.module.css';
import BackIcon from './backIcon.svg';
import Link from 'next/link';

type Props ={
    backHref: string;
    color:string;
    title?:string;
    subtitle?:string;
}

export const Header = ({ backHref, color, title, subtitle }: Props) => {
    return(
        <div className={styles.container}>
            <div className={styles.leftSide}>
               <Link href={backHref}>
                    <img src="/tmp/App/Vector.png" width={'20px'}/>
               </Link>
                
            </div>
            <div className={styles.centerSide}>
                {title &&
                <div className={styles.title}>
                    {title}
                </div>
                }
                {subtitle &&
                <div className={styles.subTitle}>
                    {subtitle}
                </div>
                }
            </div>
            <div className={styles.rightSide}>
                ...
            </div>
        </div>
    );
}