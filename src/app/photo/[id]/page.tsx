import Pathname from "./Pathname"

const Photo = async ({ params }: PageProps<'/photo/[id]'>) => {

    console.log('load dynamic')

    await new Promise((res) => setTimeout(() => {res(null)}, 2000))

    const { id } = await params

    return (

        <>
        
            <p>I am Photo</p>

            <p>My id is {id}</p>

            <Pathname />
        </>
    )
}

export default Photo