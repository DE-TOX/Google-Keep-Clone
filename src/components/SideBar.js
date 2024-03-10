import { useState } from "react"
import { useNavigate } from "react-router-dom"
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
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



export default function TemporaryDrawer({ open ,onClose}) {

    const navigate = useNavigate();

    const handleListItemClick = (text) => {
        const route = `${text.toLowerCase()}`
        navigate(route);
    };

    return (
        <SwipeableDrawer
            anchor={'left'}
            open={open}
            onClose={onClose}
            sx={{ zIndex: 0 }}
            margin-top={"50px"}
        >
            <Box
                sx={{ width: 250 }}
                role="presentation"
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
                    {["Notes", "Archive", "Trash"].map((text, index) => (

                        <ListItem key={text} disablePadding>
                            <ListItemButton onClick={() =>
                                handleListItemClick(text)}>
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
        </SwipeableDrawer>
    )
}