import { FcHome } from "react-icons/fc";
import { SharedHeaderItem } from "../shared/SharedHeaderItem";
import { HiArchive } from "react-icons/hi";

export function AboutMeHeader() {
    return (
        <div className="py-10 px-10 flex justify-between">
            <SharedHeaderItem url="/" Icon={FcHome} name="home" />
            <SharedHeaderItem url="/products" Icon={HiArchive} name="制作した作品" />
        </div>
    )
}