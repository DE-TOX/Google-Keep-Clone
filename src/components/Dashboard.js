import { useEffect, useState } from "react"
import { useNavigate, Outlet } from "react-router-dom"
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import SplitscreenSharpIcon from '@mui/icons-material/SplitscreenSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


// import './Dashboard.css'
function Dashboard() {
    const [toggleDrawer, setToggleDrawer] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        console.log(toggleDrawer);

    }, [toggleDrawer])
    const handleListItemClick = (text) => {
        const route = `${text.toLowerCase()}`
        navigate(route);
    };

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '200%',

        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',

        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        height: '46px',

        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                height: '30px',
                marginBottom: "1px",
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));


    return (
        <>
            {/* <div className="header" style={{}}> */}
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: 'white', color: 'rgb(95, 99, 104)' }}>
                    <Toolbar >
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                            onClick={() =>
                                setToggleDrawer(!toggleDrawer)
                            }
                        >
                            <MenuIcon />
                        </IconButton>
                        <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" style={{ height: "40px", width: "40px", margin: "0" }} alt="" />
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}

                        >
                            FUNDONOTES
                        </Typography>
                        <Search >
                            <SearchIconWrapper >
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <RefreshIcon />
                        <SplitscreenSharpIcon />
                        <SettingsSharpIcon />
                        <>
                            <AppsSharpIcon />
                            <AccountCircleSharpIcon />
                        </>
                    </Toolbar>
                </AppBar>
            </Box>

            {/* </div> */}
            <br />


            <SwipeableDrawer
                anchor={'left'}
                open={toggleDrawer}
                onClose={() => setToggleDrawer(false)}
                sx={{ zIndex: 0 }}
                margin-top={"50px"}
            >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                // onClick={true}
                >
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        margin={"2%"}
                    >
                        <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" style={{ height: "40px", width: "40px" }} alt="" />
                        FUNDONOTES
                    </Typography>
                    <List style={{ marginTop: "100px" }}>
                        {/* {["Notes", "Reminder", "Edit Labels", "Archive", "Trash"].map((text, index) => (
                            
                            <ListItem key={text} disablePadding>
                                <ListItemButton onClick={() =>
                    navigate("/dashboard/notes")}>
                                    <ListItemIcon>
                                        {index === 0 && <LightbulbOutlinedIcon />}
                                        {index === 1 && <NotificationsOutlinedIcon />}
                                        {index === 2 && <EditOutlinedIcon />}
                                        {index === 3 && <ArchiveOutlinedIcon />}
                                        {index === 4 && <DeleteOutlineOutlinedIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))} */}
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => handleListItemClick('/dashboard/notes')}>
                                <ListItemIcon>
                                    <LightbulbOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Notes" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <NotificationsOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Reminder" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <EditOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Edit" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => handleListItemClick('/dashboard/archive')}>
                                <ListItemIcon>
                                    <ArchiveOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Archive" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => handleListItemClick('/dashboard/trash')}>
                                <ListItemIcon>
                                    <DeleteOutlineOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Trash" />
                            </ListItemButton>
                        </ListItem>
                    </List>

                </Box>
                {/* <br />
                <button onClick={() =>
                    navigate("/dashboard/notes")}>Notes</button>
                <br />
                <button onClick={() =>
                    navigate("/dashboard/archive")}>Archive</button>
                <br />
                <button onClick={() =>
                    navigate("/dashboard/trash")}>Trash</button>
                <br /> */}
            </SwipeableDrawer>
            <Outlet></Outlet>
        </>
    )
}

export default Dashboard