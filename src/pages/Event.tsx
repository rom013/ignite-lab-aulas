import { useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Video } from "../components/Video"

export function Event() {

    const {slug} = useParams()

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex flex-1">
                {slug 
                    ? <Video/> 
                    : <div className="flex-1"/>
                }
                <Sidebar />
            </main>
        </div>
    )
}