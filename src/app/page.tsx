import PhotoForm from "@/features/photoForm/ui/PhotoForm";
import Link from "next/link";

export default function Home() {

  console.log('generate static')

  return (

    <div>

      <Link href={'/feed'} >Go to /feed</Link>

      <br />

      <PhotoForm />
      
      <Link href={'/test/first-1/second-4'}>Go to /test/first-1/second-4</Link>
    </div>
  )
}