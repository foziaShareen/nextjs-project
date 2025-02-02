import Link from "next/link";
import ToggleMode from "./ToggleMode";
import MainNavLinks from "./MainNavLinks";

// components/MainNav.tsx
const MainNav = () => {
    return (
        <div className="flex gap-2 justify-between">
           <MainNavLinks />
           
            <div className="flex gap-2" >
                <Link href="/logout">Logout</Link>
                <ToggleMode />
            </div>
        </div>
    )
}
export default MainNav;