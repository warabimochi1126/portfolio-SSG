import Link from "next/link";
import { ImAccessibility } from "react-icons/im";
import { HiArchive } from "react-icons/hi";

import { FadeInOut } from "./FadeInOut";

export function Mainpage() {
    return (
        <>
            <span className="font-bold text-3xl">Kodai Ichijima</span><FadeInOut />
            <Link href="/aboutme" className="block">
                <ImAccessibility className="inline"/>私について<FadeInOut />
            </Link>
            <Link href="/products" className="block">
                <HiArchive className="inline"/>制作した作品<FadeInOut />
            </Link>
        </>
    )

}