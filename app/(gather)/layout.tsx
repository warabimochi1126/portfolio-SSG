import { SharedHeader } from "../component/shared/SharedHeader";

interface DetailLayoutProps {
    children: React.ReactNode;
}

export default function DetailLayout({ children }: DetailLayoutProps) {
    return (
        <>
            {/* <SharedHeader /> */}
            { children }
        </>
    )
}