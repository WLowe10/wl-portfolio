import { useStyles } from "./styles";
import { Mail, Grid } from "react-feather";
import { Link, useLocation } from "react-router-dom";
import { Theme } from "@global/constants/theme";
import { RouteTypes, RouteList } from "@global/constants/routes";
import { useMediaQuery } from "react-responsive";
import usflag from "@global/assets/images/us.png";
import { useLocalTime } from "@global/hooks";

export const TopBar = () => {
    const classes = useStyles();
    const location = useLocation().pathname;
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const { time } = useLocalTime();
    

//!add ability to click time to switch from 24 to 12 hour
    return (
        <div className={classes.topBar}>
            <div className={classes.presence}>
                <div style={{display: "flex", alignItems: "center", gap: 10}}>
                    <img src={usflag} height={16} />                    
                    <p className={classes.presenceText}>
                        United States
                    </p>
                </div>
                <div style={{display: "flex", alignItems: "center", gap: 10}}>
                    <p className={classes.presenceText}>
                        {
                            time
                        }
                    </p>
                    <p className={classes.presenceText}>
                        &#8226;
                    </p>
                    <p className={classes.presenceText}>
                        in Kansas
                    </p>
                </div>
            </div>
            <div className={classes.navContainer}>
                <h1 className={classes.title}>
                    wes lowe
                </h1>
                {
                    isMobile ? (
                        <Grid color={Theme.fontColors.primary}/>
                    ) : (
                    RouteList.map((route, index) => {
                        if (route.path == RouteTypes.Contact) return <Link to={route.path} key={index}><Mail color={location == route.path ? Theme.fontColors.secondary : Theme.accents.grey} /></Link>
                            return <Link className={location == route.path ? classes.navElementActive : classes.navElement} to={route.path} key={index}>{route.name}</Link>
                        })
                    )
                }
            </div>
            
            
        </div>
    )
};