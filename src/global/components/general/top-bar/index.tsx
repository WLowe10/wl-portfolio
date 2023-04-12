import { useStyles } from "./styles";
import { Mail, Grid } from "react-feather";
import { Theme } from "@global/constants/theme";
import { RouteTypes, RouteList } from "@global/constants/routes";
import { useMediaQuery } from "react-responsive";
import usflag from "@global/assets/images/us.png";
import { useLocalTime } from "@global/hooks";
import Image from "next/image"
import { useRouter } from 'next/router'

export const TopBar = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const { time } = useLocalTime();
    const router = useRouter();
    const location = router.asPath;

    return (
        <div className={classes.topBar}>
            <div className={classes.presence}>
                <div style={{display: "flex", alignItems: "center", gap: 10}}>
                    <Image src={usflag} height={16} alt={"united states"}/>                    
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
                            if (route.path == RouteTypes.Contact) return <a href={route.path} key={index}><Mail color={location == route.path ? Theme.fontColors.secondary : Theme.accents.grey} /></a>
                            return <a className={location == route.path ? classes.navElementActive : classes.navElement} href={route.path} key={index}>{route.name}</a>
                        })
                    )
                }
            </div>
            
            
        </div>
    )
};