import { useStyles } from "./styles";
import { FullFlex } from "@global/components/containers";

export const Home = () => {
    const classes = useStyles();

    return (
        <FullFlex className={classes.home}>
            <div className={classes.mainContainer}>
                <div className={classes.topBar}>
                    <h1 className={classes.title}>Wes Lowe</h1>
                </div>
            </div>
        </FullFlex>
    )
};    
