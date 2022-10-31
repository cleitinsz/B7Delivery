import { Product } from "../types/Product";
import { Tenant } from "../types/Tenant";

export type getTenantResponse = {
    name:string;
    mainColor: string;
    secondColor: string;
}

const TEMPORARYoneProduct: Product = {
    id:1 , 
    image: '/tmp/burguer.png', 
    categoryName:' Tradicional', 
    name: 'Texas Burger', 
    price: 25.50, 
    description: '2 Blends de carne de 150g, Queijo Cheddar,Bacon Caramelizado, Salada, Molho da casa, Pão brioche artesanal'
}

export const useApi = (tenantSlug: string) => ({
    
    getTenant: async () => {
        switch(tenantSlug) {
            case 'b7burger':         
                return {
                    slug: 'b7burger',
                    name: 'B7Burger',
                    mainColor: '#FF0000',
                    secondColor: "#00FF00"
                }
                break;
            case 'b7pizza':
                return {
                    slug: 'b7pizza',
                    name: 'B7Pizza',                 
                    mainColor: '#00FF00',
                    secondColor: "#FF0000"
                }
                break;
            default: return false;
        }
        
    },

    getAllProducts: async() => {
        let products = []; 
        for(let q = 0; q < 6; q++){
            products.push(TEMPORARYoneProduct);
        }
        return products;
    },

    getProduct: async(id: string) => {
        return TEMPORARYoneProduct;
    }

});
