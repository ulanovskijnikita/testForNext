import Pathname from "./Pathname"

const Photo = async ({ params }: PageProps<'/photo/[id]'>) => {

    console.log('tester3')
    console.log('tester2')
    console.log('tester')
    console.log('load dynamic with rebase')
    console.log('load dynamic with')
    await new Promise((res) => setTimeout(() => {res(null)}, 2000))
    const { id } = await params

    console.log('dynamic params')
    console.log(id)

    return (

        <>
        
            <p>I am Photo</p>

            <p>My id is {id}</p>

            <Pathname />
        </>
    )
}

export default Photo