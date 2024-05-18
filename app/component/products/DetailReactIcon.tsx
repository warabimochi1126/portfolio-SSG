import Link from "next/link";
import { IconType } from "react-icons";

interface DetailReactIcon {
    url: string;
    Icon: IconType;
}

export default function DetailReactIcon({ url, Icon }: DetailReactIcon) {
  return (
    <>
        <Link href={url}>
            <Icon size={30} />                      
        </Link>

    </>
  )
}
