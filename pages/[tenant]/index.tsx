import { GetServerSideProps } from 'next';
import Banner from '../../components/Banner';
import ProductItem from '../../components/ProductItem';
import { SearchInput } from '../../components/SearchInput';
import { getTenantResponse, useApi } from '../../libs/useApi';
import styles from '../../styles/Home.module.css'
const Home = (data: Props) => {

    const handleSearch = (searchValue: string) => {
        console.log(`Você está buscando por : ${searchValue}`);
    }
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.headerTop}>
                    <div className={styles.headerTopLeft}>
                        <div className={styles.headerTitle}>Seja Bem Vindo (a) 👋</div>
                        <div className={styles.headerSubtitle}>
                            O que deseja para hoje?
                        </div>
                    </div>
                    <div className={styles.headerTopRight}>
                        <div className={styles.menuBottom}>
                            <div className={styles.menuBottomLine} style={{backgroundColor: data.tenant.mainColor}}>
                                
                            </div>
                            <div className={styles.menuBottomLine} style={{backgroundColor: data.tenant.mainColor}}>
                                
                            </div>
                            <div className={styles.menuBottomLine} style={{backgroundColor: data.tenant.mainColor}}>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.headerBottom}>
                    <SearchInput
                        mainColor={data.tenant.mainColor}
                        onSearch={handleSearch}
                    />
                </div>
            </header>
            <Banner/>

            <div className={styles.grid}>
                <ProductItem
                    data={{ id:1 , image: '/tmp/burguer.png', categoryName:' Tradicional', name: 'Texas Burger', price:' R$ 25,50'}}
                    mainColor={data.tenant.mainColor}
                    secondColor={data.tenant.secondColor}
                />
                <ProductItem
                    data={{  id:2 ,image: '/tmp/burguer.png', categoryName:' Tradicional', name: 'Texas Burger', price:' R$ 25,50'}}
                    mainColor={data.tenant.mainColor}
                    secondColor={data.tenant.secondColor}
                />
                <ProductItem
                    data={{  id:3 ,image: '/tmp/burguer.png', categoryName:' Tradicional', name: 'Texas Burger', price:' R$ 25,50'}}
                    mainColor={data.tenant.mainColor}
                    secondColor={data.tenant.secondColor}
                />
                <ProductItem
                    data={{  id:4 ,image: '/tmp/burguer.png', categoryName:' Tradicional', name: 'Texas Burger', price:' R$ 25,50'}}
                    mainColor={data.tenant.mainColor}
                    secondColor={data.tenant.secondColor}
                />
                
                <ProductItem
                    data={{  id:5 ,image: '/tmp/burguer.png', categoryName:'Tradicional', name: 'Texas Burger', price:' R$ 25,50'}}
                    mainColor={data.tenant.mainColor}
                    secondColor={data.tenant.secondColor}
                />
            </div>
        </div>
    );
}

export default Home;

type Props = {
    tenant: getTenantResponse
}

export const getServerSideProps: GetServerSideProps = async (context) =>{
    const { tenant : tenantSlug } = context.query;
    const api = useApi();

    // Get Tenant
    const tenant = await api.getTenant(tenantSlug as string);
    if (!tenant) {
        return{
            redirect: {
                destinantion: '/',
                permanent: false
            }
        }
    }

    return{
        props: {
            tenant
        }
    }
}