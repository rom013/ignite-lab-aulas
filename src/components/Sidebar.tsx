import { Lessons } from "./Lessons";
// import { gql, useQuery } from "@apollo/client";
import { useGetLessonsQuery } from "../graphql/generated";

// const GET_LESSONS_QUERY = gql`
//     query {
//         lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
//             title
//             slug
//             lessonType
//             availableAt
//             id
//         }
//     }
// `

// interface GetLessonsQueryResponse {
//     lessons: {
//         title: string
//         slug: string
//         lessonType: 'live' | 'class'
//         id: string
//         availableAt: string
//     }[]
// }



export function Sidebar() {

    const { data } = useGetLessonsQuery()
    console.log(data)

    return (
        <aside className="w-[348px] bg-gray-700 border-l border-gray-600 p-6">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-600 block">
                Cronograma das aulas
            </span>
            <div className="h-[70vh] overflow-auto scrollbar mb-6 border-b border-gray-600 flex flex-col items-center">
                <div className="flex flex-col gap-8">
                    {data?.lessons.map((e) => {
                        return (
                            <Lessons key={e.id}
                                title={e.title}
                                slug={e.slug}
                                availableAt={new Date(e.availableAt)}
                                type={e.lessonType}
                            />
                        )
                    })}
                </div>
            </div>
        </aside>
    )
}