import Link from "next/link"
import { ModeToggle } from "./theme-toggle-button"
import { buttonVariants } from "./ui/button"

//rfce
function Navbar() {
    return (
        <nav className="flex justify-between py-5">
            <Link href="/" >
                <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                    NextActionsCRUD
                </h1>
            </Link>
            <div className="flex gap-2 items-start">
                <Link href="/new" className={buttonVariants({ variant: "secondary" })}>
                    Create Task
                </Link>
                <ModeToggle />
            </div>
        </nav >
    )
}

export default Navbar