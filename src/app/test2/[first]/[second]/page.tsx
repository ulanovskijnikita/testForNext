// нужно понять о build в next
// export async function generateStaticParams() {

//     return [{second: 'second-0'}, {second: 'second-1'}, {second: 'second-2'}, {second: 'second-3'}, {second: 'second-4'}, {second: 'second-5'}, {second: 'second-6'},].map(({second}) => {

//         return {

//             first: 'first-0',
//             second: second,
//         }
//     })
// }

// const Dynamic = async ({params}: PageProps<'/test2/[first]/[second]'>) => {

//     const {first, second} = await params

//     return <>
    
//         <p>{first}</p>

//         <p>{second}</p>
//     </>
// }

// export default Dynamic