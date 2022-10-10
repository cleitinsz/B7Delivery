import { Tenant } from "../types/Tenant";

export type getTenantResponse = {
    name:string;
    mainColor: string;
    secondColor: string;
}


export const useApi = () => ({
    
    getTenant: (tenantSlug: string): boolean | Tenant => {
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
        
    }

});
