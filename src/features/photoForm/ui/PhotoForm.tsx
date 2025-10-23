'use client'

import Link from "next/link"
import { useState } from "react"

const PhotoForm = () => {

    const [inputId, setInputId] = useState<string>('5')

    return (

        <>

            <input type="text" onChange={e => setInputId(e.target.value)} placeholder="photo id" />
      
            <Link href={`/photo/${inputId}`} defaultValue={inputId}>Go to /photo/{inputId}</Link>
        </>
    )
}

export default PhotoForm