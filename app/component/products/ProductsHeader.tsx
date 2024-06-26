import { FcHome } from "react-icons/fc";
import { SharedHeaderItem } from "../shared/SharedHeaderItem";
import { ImAccessibility } from "react-icons/im";

export function ProductsHeader() {
    return (
        <div className="py-10 px-10 flex justify-between">
            <SharedHeaderItem url="/" Icon={FcHome} name="home" />
            <SharedHeaderItem url="/aboutme" Icon={ImAccessibility} name="私について" />
        </div>
    )
}