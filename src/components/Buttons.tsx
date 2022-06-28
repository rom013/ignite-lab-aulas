import { DiscordLogo, Lightning } from 'phosphor-react'

interface d {
    variant: string
}

export function Button(props: d) {
    return (
        <>
            {
                props.variant == "discord" ? (
                    <a href="#" className="rounded bg-green-500 py-4 px-[14px] gap-2 font-bold uppercase flex items-center justify-center text-sm hover:bg-green-700 transition duration-[.4s]">
                        <DiscordLogo size={24}/>
                        comunidade no discord
                    </a>
                ) : (
                    <a href="#" className="rounded border border-blue-500 text-blue-500 py-4 px-[14px] gap-2 font-bold uppercase flex items-center justify-center text-sm hover:bg-blue-500 hover:text-gray-900 transition duration-[.4s]">
                        <Lightning size={24}/>
                        acessar os desafios
                    </a>
                )
            }

        </>

    )
}