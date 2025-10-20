import Pathname from "@/app/photo/[id]/Pathname"
import { ParamMap } from "../../../../../.next/types/routes"

export async function generateStaticParams({params}: {params: ParamMap['/photo']}) {

    console.log('generateStaticParams')
    console.log(params)
    
    return [{id: '0'}, {id: '1'}, {id: '2'}, {id: '3'}, {id: '4'},]
}

const FeedPhoto = async ({ params }: PageProps<'/photo/[id]'>) => {

    const { id } = await params

    await new Promise((res) => setTimeout(() => {res(null)}, 2000))

    console.log('generate FeedPhoto with id ' + id)

    return (

        <>

            <p>I am FeedPhoto</p>

            <p>My id is {id}</p>

            <Pathname />
        </>
    )
}

export default FeedPhoto