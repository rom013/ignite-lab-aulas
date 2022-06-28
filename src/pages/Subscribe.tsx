import { gql, useMutation } from "@apollo/client";
import classNames from "classnames";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

// const CREATE_SUBSCRIBE_MUTATION = gql`
//     mutation CreateSubscriber($name: String!, $email: String!) {
//         createSubscriber(data: {name: $name, email: $email}) {
//             id
//         }
//     }
// `

export function Subscribe() {
    const navigate = useNavigate()


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    // const [createSubscriber, {loading}] = useMutation(CREATE_SUBSCRIBE_MUTATION)

    const [createSubscriber, {loading}] = useCreateSubscriberMutation()

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault()
        await createSubscriber({
            variables: {
                name,
                email,
            }
        })
        
        navigate('/event')
    }

    return (
        <main className="min-h-screen flex flex-col items-center bg-blur bg-cover bg-no-repeat">
            <div className="max-w-[1100px]">
                <div className="flex justify-between items-center mt-20">
                    <div className="max-w-[640px] flex flex-col">
                        <Logo />
                        <h2 className="font-sans leading-tight text-[2.5rem] mt-8">
                            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React JS</strong>
                        </h2>
                        <p className="text-[1rem] text-gray-300 mt-6 leading-relaxed">
                            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                        </p>
                    </div>
                    <div className="p-8 bg-gray-700 border-gray-500 border rounded">
                        <strong className="mb-6 block text-2xl">
                            Inscreva-se gratuitamente
                        </strong>
                        <form
                            onSubmit={handleSubscribe}
                            className="flex flex-col w-full gap-2"
                        >
                            <input
                                className="bg-gray-900 h-14 px-5 rounded text-white text-[1rem] focus:outline-none placeholder:text-gray-300 invalid:border-red-500 invalid:border-[1px]"
                                placeholder="Seu nome completo"
                                type="text"
                                onChange={(e) => {
                                    setName(e.target.value)
                                }}
                            />
                            <input
                                className="bg-gray-900 h-14 px-5 rounded text-white text-[1rem] focus:outline-none placeholder:text-gray-300 invalid:border-red-500 invalid:border-[1px]"
                                placeholder="Digite o seu email"
                                type="email"
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                            />

                            <button
                                className={classNames(`bg-green-500 flex justify-center items-center mt-6 h-14 font-bold uppercase rounded text-[1rem] hover:bg-green-700 transition duration-[.4s]`, {
                                    "opacity-40 cursor-not-allowed": loading
                                })}
                                type="submit"

                                disabled={loading}
                            >
                                garantir minha vaga
                            </button>
                        </form>
                    </div>
                </div>
                <img
                    className="mt-10"
                    src="src/assets/print.png"
                    alt="print screen"
                />
            </div>
        </main>
    )
}