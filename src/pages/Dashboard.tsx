import { useLoaderData } from "react-router-dom";
import { fetchData } from './../../helpers';

export function dashboardLoader() {
    const userName = fetchData("userName");
    return { userName }
}

export default function Dashboard() {
    const { userName } = useLoaderData() as any;
    return (
        <div className="text-red-500 text-center">
            Dashboard  and UserName is: {userName}</div>
    )
}
