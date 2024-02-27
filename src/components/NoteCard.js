import { useState } from "react";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FormatColorResetOutlinedIcon from '@mui/icons-material/FormatColorResetOutlined';


function NoteCard(props) {

    const { noteObj } = props
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorEl2, setAnchorEl2] = useState(null);
    const open = Boolean(anchorEl);
    const open2 = Boolean(anchorEl2);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };

    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            <Card variant="outlined" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} spacing={3} sx={{ width: 260 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom wra>
                    </Typography>
                    <Typography variant="h5" component="div">
                        {noteObj.title}
                    </Typography>
                    <Typography variant="body2">
                        {noteObj.description}
                    </Typography>
                </CardContent>
                <CardActions spacing="1px" style={{ visibility: isHovered ? 'visible' : 'hidden' }}>
                    <Button color="inherit" sx={{ minWidth: 0 }} ><NotificationsOutlinedIcon sx={{ fontSize: "15px" }} /></Button>
                    <Button color="inherit" sx={{ minWidth: 0 }}><PersonAddAltOutlinedIcon sx={{ fontSize: "15px" }} /></Button>
                    <Button color="inherit" sx={{ minWidth: 0 }}
                        aria-controls={open ? 'color-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick2}
                    ><ColorLensOutlinedIcon sx={{ fontSize: "15px" }} /></Button>
                    <Button color="inherit" sx={{ minWidth: 0 }}><ImageOutlinedIcon sx={{ fontSize: "15px" }} /></Button>
                    <Button color="inherit" sx={{ minWidth: 0 }}><ArchiveOutlinedIcon sx={{ fontSize: "15px" }} /></Button>
                    <Button color="inherit" sx={{ minWidth: 0 }}
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}><MoreVertOutlinedIcon sx={{ fontSize: "15px" }} /></Button>

                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Delete note</MenuItem>
                        <MenuItem onClick={handleClose}>Add label</MenuItem>
                        <MenuItem onClick={handleClose}>Add drawing</MenuItem>
                        <MenuItem onClick={handleClose}>Make a copy</MenuItem>
                        <MenuItem onClick={handleClose}>Show Checkboxes</MenuItem>
                        <MenuItem onClick={handleClose}>Copy to Google Docs</MenuItem>
                        <MenuItem onClick={handleClose}>Version history</MenuItem>
                    </Menu>
                    <Menu
                        id="color-menu"
                        anchorEl={anchorEl2}
                        open={open2}
                        onClose={handleClose2}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose2}><div style={{ width: "375px", height: "35px", borderRadius: "7px", boxShadow: "10px 9px 13px 1px lightgray" }}>
                                <div style={{ display: "flex", gap: "8px" }}>
                                    <FormatColorResetOutlinedIcon style={{ borderRadius: "50%", border: "solid black 1px" }} />
                                    <div style={{ width: "25px", height: "25px", backgroundColor: "coral", borderRadius: "50%" }}></div>
                                    <div style={{ width: "25px", height: "25px", backgroundColor: "red", borderRadius: "50%" }}></div>
                                    <div style={{ width: "25px", height: "25px", backgroundColor: "yellow", borderRadius: "50%" }}></div>
                                    <div style={{ width: "25px", height: "25px", backgroundColor: "blue", borderRadius: "50%" }}></div>
                                    <div style={{ width: "25px", height: "25px", backgroundColor: "green", borderRadius: "50%" }}></div>
                                    <div style={{ width: "25px", height: "25px", backgroundColor: "grey", borderRadius: "50%" }}></div>
                                    <div style={{ width: "25px", height: "25px", backgroundColor: "purple", borderRadius: "50%" }}></div>
                                    <div style={{ width: "25px", height: "25px", backgroundColor: "cyan", borderRadius: "50%" }}></div>
                                    <div style={{ width: "25px", height: "25px", backgroundColor: "magenta", borderRadius: "50%" }}></div>
                                    <div style={{ width: "25px", height: "25px", backgroundColor: "teal", borderRadius: "50%" }}></div>
                                </div>
                            </div></MenuItem>
                    </Menu>
                </CardActions>
            </Card>

        </>)
}

export default NoteCard




