import { Logo } from "./Logo"

export function Header() {
    return (
        <>
            <header className="bg-gray-700 items-center justify-center w-full py-5 flex border-b border-gray-600">
                <Logo />
            </header>
        </>

    )
}