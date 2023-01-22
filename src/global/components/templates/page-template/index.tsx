import { ReactNode } from "react"
import { useStyles } from "./styles"
import { FullFlex } from "@global/components/containers";
import { TopBar } from "@global/components/general";

type Props = {
    children: ReactNode
};

export const PageTemplate = ({ children }: Props) => {
    const classes = useStyles()

    return (
        <FullFlex style={{display: "flex", justifyContent: "center"}}>
            <div style={{maxWidth: "56rem", display: "flex", flexDirection: "column", padding: "2rem", flex: 1}}>
                <TopBar />
                {
                    children
                }
            </div>
        </FullFlex>
    )
}