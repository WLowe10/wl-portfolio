import { useStyles } from "./styles";
import { Mail, Grid } from "react-feather";
import { Link, useLocation } from "react-router-dom";
import { Theme } from "@global/constants/theme";
import { Weights } from "@global/constants/fonts";
import { RouteTypes, RouteList } from "@global/constants/routes";
import { useMediaQuery } from "react-responsive";

export const TopBar = () => {
    const classes = useStyles();
    const location = useLocation().pathname;
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <div className={classes.topBar}>
            <h1 className={classes.title}>
                wes lowe
            </h1>

            {
                isMobile ? (<Grid color={Theme.fontColors.primary}/>) : (
                RouteList.map(route => {
                   if (route.path == RouteTypes.Contact) return <Link to={route.path}><Mail color={location == route.path ? Theme.fontColors.secondary : Theme.accents.grey} /></Link>
                   return <Link className={location == route.path ? classes.navElementActive : classes.navElement} to={route.path}>{route.name}</Link>
                })
                )
            }
        </div>
    )
};