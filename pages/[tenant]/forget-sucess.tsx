import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Icon } from '../../components/Icon';
import { useAppContext } from '../../contexts/AppContext';
import { useApi } from '../../libs/useApi';
import styles from '../../styles/ForgetSucess.module.css'
import { Tenant } from '../../types/Tenant';

const ForgetSucess = (data: Props) => {
    const { tenant, setTenant} = useAppContext();

useEffect(()=>{
        setTenant(data.tenant);

    },[]);

    const router = useRouter ();

    const handleSubmit = () => {
        router.push(`/${data.tenant.slug}/login`)
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Esqueci a senha | {data.tenant.name}</title>
            </Head>

            <Header
                color={data.tenant.mainColor}
                backHref={`/${data.tenant.slug}/forget`} 
            />
            
            <div className={styles.iconArea}>
            </div>
            
            <div className={styles.title}>
                Verifique seu E-mail
            </div>

            <div className={styles.subtitle}  
            >Enviamos as instruções para recuperação de senha para o seu e-mail.
            </div>
            <div className={styles.formArea}>
                <div className={styles.inputArea}>
                    <Button
                        color= {data.tenant.mainColor}
                        label="Fazer Login"
                        onClick={handleSubmit}
                        fill
                    />
                </div>
            </div>
        </div>
    );
}

export default ForgetSucess;

type Props = {
    tenant: Tenant
}

export const getServerSideProps: GetServerSideProps = async (context) =>{
    const { tenant : tenantSlug } = context.query;
    const api = useApi(tenantSlug as string);

    // Get Tenant
    const tenant = await api.getTenant();
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