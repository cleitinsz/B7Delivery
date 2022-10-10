import { Product } from '../../types/Product';
import styles from './styles.module.css'
import Link from 'next/link'
import { useAppContext } from '../../contexts/AppContext';

type Props = {
    data: Product;
}

export default function ProductItem({data}: Props){
    const { tenant } = useAppContext();

    return(
        <Link href={`/${tenant?.slug}/product/${data.id}`}>
            <a className={styles.container}>
                <div className={styles.head} style={{backgroundColor: tenant?.secondColor}}>
                </div>
                <div className={styles.info}>
                    <div className={styles.img}>
                        <img src={data.image} />
                    </div>
                    <div className={styles.catName}>{data.categoryName}</div>
                    <div className={styles.name}>{data.name}</div>
                    <div className={styles.price} style={{color: tenant?.mainColor}}>{data.price}</div>
                </div>
            </a>
        </Link>
    )
}