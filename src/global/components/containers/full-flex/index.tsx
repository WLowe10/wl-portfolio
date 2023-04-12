import { ReactNode, CSSProperties } from "react";

type Props = {
    children: ReactNode, 
    style?: CSSProperties, 
    className?: string
};

export const FullFlex = ({children, style, className}: Props) => {
    return (
        <div style={{display: "flex", minHeight: "100vh", flex: 1, ...style}} className={className}>
            {
                children
            }
        </div>
    )
};