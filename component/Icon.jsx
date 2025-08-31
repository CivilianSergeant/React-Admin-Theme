import { LayoutDashboard, Settings,FileChartColumnIncreasing } from "lucide-react";

export default function Icon({name,mr}){

    switch(name){
        case 'dashboard':
            return (<LayoutDashboard className={mr}/>)
        case 'settings':
            return (<Settings className={mr}/>)
        case 'report':
            return (<FileChartColumnIncreasing className={mr}/>)
        default:
            break;
    }
}