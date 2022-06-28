import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

interface LessonsProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class'
}//Função exclusiva do typescript


export function Lessons(props: LessonsProps) {

    const disponivel = isPast(props.availableAt) //lib: date-fns | retorna true se o valor passado for uma data passada

    const {slug} = useParams<{slug: string}>()

    const isActiveLesson = slug === props.slug

    console.log(isActiveLesson)
    return (
        <Link 
            to={`/event/lesson/${props.slug}`} 
            className={
                classNames("cursor-pointer group w-[calc(100%-15px)]", {
                    "cursor-not-allowed" : !disponivel
                })
            }
        >
            <span className="text-gray-300">
                {format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm",{locale: ptBR})}
            </span>

            <div className={
                classNames(
                    "p-4 flex flex-col rounded border border-gray-500 mt-2 group-hover:border-green-500 transition duration-[.4s]"
                    ,{
                        "bg-green-500" : isActiveLesson
                    })

            }>
                <header className="flex justify-between mb-4">
                    {disponivel ? (
                        <span className="text-blue-500 text-sm flex items-center gap-2">
                            <CheckCircle size={20} />
                            Conteúdo liberado
                        </span>
                    ) : (
                        <span className="text-orange-500 text-sm flex items-center gap-2">
                            <Lock size={20} />
                            Em breve
                        </span>
                    )}

                    
                    <span className="border rounded border-green-300 text-xs font-bold uppercase px-2 py-[0.125rem] text-white">
                        {props.type === "live" ? "Live" : "Aula Prática"}
                    </span>
                </header>

                <strong className={
                    classNames("text-gray-200", 
                        {"!text-white": isActiveLesson}
                    )
                }>
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}