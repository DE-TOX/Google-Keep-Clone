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
import { archiveNotes,trashNotes } from "../services/NoteServices";



function NoteCard({ updateNoteList, noteObj }) {

    // const { noteObj } = props
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorEl2, setAnchorEl2] = useState(null);
    // const [moreMenuOpen, setMoreMenu] = useState(false)
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
        // setMoreMenu(!moreMenuOpen)
    };

    const handleNotesOperation = (action) => {

        if (action === "archive") {
            archiveNotes({
                noteIdList: [noteObj?.id],
                isArchived: true
            })
            updateNoteList("archive",noteObj.id)
        }
        else if (action === "trash") {
            trashNotes({
                noteIdList: [noteObj?.id],
                isDeleted: true
            })
            updateNoteList("trash", noteObj)
        }
        else {
            noteObj.color = action
            updateNoteList("color", noteObj)
        }

    }

    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            <Card variant="outlined" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} spacing={3} sx={{ width: 260, backgroundColor: noteObj.color }}>
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
                    <Button color="inherit" sx={{ minWidth: 0 }}><ArchiveOutlinedIcon sx={{ fontSize: "15px" }} onClick={() => handleNotesOperation("archive")} /></Button>
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
                        <MenuItem onClick={() => handleNotesOperation("trash")} >Delete note</MenuItem>
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
                                <div style={{ width: "25px", height: "25px", backgroundColor: "#FAAFA8", borderRadius: "50%" }} onClick={()=>handleNotesOperation("#FAAFA8")}></div>
                                <div style={{ width: "25px", height: "25px", backgroundColor: "#f39f76", borderRadius: "50%" }} onClick={()=>handleNotesOperation("#f39f76")}></div>
                                <div style={{ width: "25px", height: "25px", backgroundColor: "#fff8b8", borderRadius: "50%" }} onClick={()=>handleNotesOperation("#fff8b8")}></div>
                                <div style={{ width: "25px", height: "25px", backgroundColor: "#e2f6d3", borderRadius: "50%" }} onClick={()=>handleNotesOperation("#e2f6d3")}></div>
                                <div style={{ width: "25px", height: "25px", backgroundColor: "#b4ddd3", borderRadius: "50%" }} onClick={()=>handleNotesOperation("#b4ddd3")}></div>
                                <div style={{ width: "25px", height: "25px", backgroundColor: "#d4e4ed", borderRadius: "50%" }} onClick={()=>handleNotesOperation("#d4e4ed")}></div>
                                <div style={{ width: "25px", height: "25px", backgroundColor: "#aeccdc", borderRadius: "50%" }} onClick={()=>handleNotesOperation("#aeccdc")}></div>
                                <div style={{ width: "25px", height: "25px", backgroundColor: "#d3bfdb", borderRadius: "50%" }} onClick={()=>handleNotesOperation("#d3bfdb")}></div>
                                <div style={{ width: "25px", height: "25px", backgroundColor: "#f6e2dd", borderRadius: "50%" }} onClick={()=>handleNotesOperation("#f6e2dd")}></div>
                                <div style={{ width: "25px", height: "25px", backgroundColor: "#e9e3d4", borderRadius: "50%" }} onClick={()=>handleNotesOperation("#e9e3d4")}></div>
                                <div style={{ width: "25px", height: "25px", backgroundColor: "#efeff1", borderRadius: "50%" }} onClick={()=>handleNotesOperation("#efeff1")}></div>
                            </div>
                        </div></MenuItem>
                    </Menu>
                </CardActions>
            </Card>

        </>)
}

export default NoteCard




