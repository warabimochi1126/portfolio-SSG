import { FcHome } from "react-icons/fc";
import { HiArchive } from "react-icons/hi";
import { ImAccessibility } from "react-icons/im";
import { SharedHeaderItem } from "./SharedHeaderItem";

export function SharedHeader() {
    return (
        <div className="py-10 px-10 flex justify-between">
            <SharedHeaderItem url="/" Icon={FcHome} name="home" />
            <div className="flex space-x-5">
                <SharedHeaderItem url="/aboutme" Icon={ImAccessibility} name="私について" />
                <SharedHeaderItem url="/products" Icon={HiArchive} name="制作した作品" />
            </div>
        </div>
    )
}