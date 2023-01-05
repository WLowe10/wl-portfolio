import { Theme } from "@global/constants/theme";
import { createUseStyles } from "react-jss";

const INDENT = 64;

export const useStyles = createUseStyles({
   treeItem: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "black",
      flex: 1
   },
   mainContainer: {
      display: "flex",
   },
   content: {
      display: "flex",
      zIndex: 99,
      margin: 0,
   },
   bone: {
      height: "64px",
      borderLeft: "1px solid white",
      borderBottom: "1px solid white",
      marginTop: -(INDENT / 2),
      borderBottomLeftRadius: 8
   },
   children: {
      display: "flex",
      flexDirection: "column",
      marginLeft: INDENT,
   }
  
});