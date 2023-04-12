import { useStyles } from "./styles";

export const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <div className={classes.separator} />
            <div className={classes.content}>
                <h1 className={classes.mainHeader}>
                    Wes Lowe
                </h1>

                <button className={classes.contact}>
                    Contact Me
                </button>
            </div>
        </footer>
    )
}