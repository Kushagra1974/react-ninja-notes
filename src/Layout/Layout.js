import { Avatar, Drawer } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import { List } from "@mui/material";
import { ListItemText } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItemButton } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ReorderIcon from '@mui/icons-material/Reorder';
import { useHistory } from "react-router";
import { Toolbar } from "@mui/material";
import { AppBar } from "@mui/material";
import { format } from "date-fns";
const drawerWidth = 240;
const useStyle = makeStyles((theme) => {
    return {
        drawer: {
            width: drawerWidth
        },
        root: {
            display: "flex"
        },
        active: {
            backgroundColor: "black",
            color: "red"
        },
        borderBottom: {
            marginTop: 10,
            borderBottom: "1px solid #b4b4b4",
            paddingBottom: 22
        },
        appbar: {
            margin: `0 0 0 ${drawerWidth}px`,

        },
        margintop: {
            marginTop: "90px"
        },
        date: {
            flexGrow: 1
        },
        avatar: {
            marginLeft: '16px'
        },
        topheight: {

        }
    }
})

function Layout({ children }) {

    const classes = useStyle();
    const history = useHistory()
    const homepage = () => {
        history.push("/");
    }
    const createpage = () => {
        history.push("/create");
    }
    return <div className={classes.root}>

        <AppBar elevation={0}>
            <Toolbar
                className={classes.appbar}
            >
                <Typography className={classes.date}>
                    Today is {format(new Date(), 'do MMMM Y')}
                </Typography>
                <Typography>Mario</Typography>
                <Avatar className={classes.avatar} src="download.jfif" />
            </Toolbar>
        </AppBar>
        <Drawer
            className={classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{ paper: classes.drawer }}
        >
            <div className={classes.borderBottom}>
                <Typography variant="h5" align="center" >
                    Ninja Notes
                </Typography>
            </div>
            <List>
                <ListItemButton
                    onClick={homepage}
                >
                    <ListItemIcon><AddCircleOutlineIcon color="secondary" fontSize="large" /></ListItemIcon>
                    <ListItemText primary="My Notes" />
                </ListItemButton>
                <ListItemButton onClick={createpage}
                >
                    <ListItemIcon><ReorderIcon color="secondary" fontSize="large" /></ListItemIcon>
                    <ListItemText primary="Create Notes" />
                </ListItemButton>
            </List>
        </Drawer>
        {children}
    </div >;
}
export default Layout