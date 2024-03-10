import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';



export default function TemporaryDrawer({ open, onClose }) {
    const [activeButton, setActiveButton] = useState(null);
    const navigate = useNavigate();

    const handleListItemClick = (text) => {
        const route = `${text.toLowerCase()}`
        navigate(route);
        setActiveButton(text);
    };
    const drawerWidthOpen = 190;
    const drawerWidthClosed = 57;

    const DrawerList = (
        <Box
            sx={{

                width: open ? drawerWidthOpen : drawerWidthClosed,
                marginRight: 200,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: open ? drawerWidthOpen : drawerWidthClosed,
                    boxSizing: 'border-box',
                    transition: (theme) =>
                        theme.transitions.create('width', {
                            easing: theme.transitions.easing.sharp,
                            duration: theme.transitions.duration.enteringScreen,
                        }),
                },
            }}
            role="presentation"
        >
            <List>
                {["Notes", "Archive", "Trash"].map((text, index) => (

                    <ListItem key={text} disablePadding sx={{ display: 'flex', justifyContent: 'center' }}>
                        <ListItemButton onClick={() =>
                            handleListItemClick(text)}
                            sx={{
                                backgroundColor: activeButton === text ? '#feefc3' : 'inherit',
                                '&:hover': {
                                    backgroundColor: '#feefc3',
                                },
                                borderRadius: 70,
                            }}

                        >
                            <ListItemIcon>
                                {index === 0 && <LightbulbOutlinedIcon />}
                                {index === 1 && <ArchiveOutlinedIcon />}
                                {index === 2 && <DeleteOutlineOutlinedIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
        <Drawer
            open={open}
            onClose={onClose}
            variant="permanent"
            sx={{
                width: open ? drawerWidthOpen : drawerWidthClosed,
                '& .MuiDrawer-paper': {
                    width: open ? drawerWidthOpen : drawerWidthClosed,
                    boxSizing: 'border-box',
                    marginTop: '8vh',
                    height: '100vh',
                }
            }}
        >

            {DrawerList}



        </Drawer>
    )
}