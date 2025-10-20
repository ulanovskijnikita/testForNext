'use client'

import { usePathname } from "next/navigation"

const Pathname = () => {

    const pathname = usePathname()

    return <p>{pathname}</p>
}

export default Pathname