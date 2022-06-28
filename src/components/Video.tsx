import { DefaultUi, Player, Youtube } from "@vime/react"
import { Button } from "./Buttons"

import '@vime/core/themes/default.css'
import { useParams } from "react-router-dom"
// import { gql, useQuery } from "@apollo/client"
import { useGetLessonBySlugQuery } from "../graphql/generated"

// const GET_LESSON_BY_SLUG_QUERY = gql`
//     query GetLessonBySlug ($slug: String){
//         lesson(where: {slug: $slug}) {
//             description
//             title
//             videoId
//             teacher {
//                 avatarURL
//                 bio
//                 name
//             }
//         }
//     }
// `

// interface GetLessonBySlugResponse{
//     lesson: {
//         description: string
//         title: string
//         videoId: string
//         teacher: {
//             avatarURL: string
//             bio:string
//             name: string
//         }
//     }
// }

export function Video() {
    const { slug } = useParams()

    // const {data} = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
    //     variables:{
    //         slug: slug
    //     }
    // })

    const { data } = useGetLessonBySlugQuery({
        variables: {
            slug: slug
        }
    })

    if (!data || !data.lesson) {
        return (
            <div className="flex-1">
                <p>Carregando...</p>
            </div>
        )
    }

    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-h-[60vh] max-w-[1100px] aspect-video">
                    <Player>
                        <Youtube videoId={`${data?.lesson.videoId}`} />
                        <DefaultUi />
                    </Player>
                </div>
            </div>

            <div className="flex mt-8 mx-8 mb-6 gap-[60px]">
                <div className="flex-1">
                    <h1 className="text-gray-100 font-bold text-2xl mb-4">
                        {data.lesson.title}
                    </h1>
                    <p className="text-gray-400 text-[16px] leading-relaxed">
                        {data.lesson.description}
                    </p>

                    {data.lesson.teacher && (
                        <div className="mt-6 flex items-center gap-4">
                            <img
                                className="rounded-full border-blue-500 border-2 w-16 h-16"
                                src={data.lesson.teacher.avatarURL}
                                alt="image profile"
                            />
                            <div className="flex flex-col leading-relaxed">
                                <strong className="font-bold text-2xl capitalize block">
                                    {data.lesson.teacher.name}
                                </strong>
                                <span className="text-gray-500 text-sm block">
                                    {data.lesson.teacher.bio}
                                </span>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex flex-col justify-start gap-4">
                    <Button variant="discord" />
                    <Button variant="chalenge" />
                </div>
            </div>

        </div>
    )
}