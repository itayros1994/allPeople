import { AllUsersApp } from "./pages/AllUsersApp";
import { Detalils } from "./pages/Detalils";

export const routes = [

    {
        path: '/',
        component: AllUsersApp
    }, 
    {
        path: '/details/:user',
        component: Detalils
        
    }, 
]