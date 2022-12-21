import { CSSProperties, ReactNode } from "react";

type Props = {
    children: ReactNode,
    style?: CSSProperties,
    className?: string
};

export const MaxContainer = ({children, style, className}: Props) => {
    return (
        <div className={className} style={{maxWidth: "56rem", ...style}}>
            {
                children
            }
        </div>
    )
};