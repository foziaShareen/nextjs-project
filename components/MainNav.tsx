import Link from "next/link";

// components/MainNav.tsx
const MainNav = () => {
    return (
        <div className="flex gap-2 justify-between">
            <div className="flex gap-2">
            <Link href="/">Dashboard</Link>
            <Link href="/tickets">Tickets</Link>
            <Link href="/users">Users</Link>
            </div>
           
            <div className="flex gap-2" >
                <Link href="/logout">Logout</Link>
                <Link href="/login">Dark</Link>
            </div>
        </div>
    )
}
export default MainNav;