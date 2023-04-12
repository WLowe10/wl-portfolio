import { ReactNode } from "react"
import { useStyles } from "./styles"
import { FullFlex } from "@global/components/containers";
import { TopBar } from "@global/components/general";
import { Footer } from "@global/components/general";

type Props = {
    children: ReactNode
};

export const PageTemplate = ({ children }: Props) => {
    const classes = useStyles()

    return (
        <FullFlex style={{display: "flex", justifyContent: "center"}}>
            <div style={{maxWidth: "56rem", display: "flex", flexDirection: "column", padding: "2rem", flex: 1, justifyContent: "space-between"}}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <TopBar />
                    {
                        children
                    }
                </div>
                <Footer />
            </div>
        </FullFlex>
    )
}