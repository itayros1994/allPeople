import { AllUsersApp } from "./pages/AllUsersApp";
import { UserDetalils } from "./pages/UserDetalils";

export const routes = [

    {
        path: '/',
        component: AllUsersApp
    }, 
    {
        path: '/details/:user',
        component: UserDetalils
        
    }, 
]