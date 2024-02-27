import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import Button from "@mui/material/Button";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { addNotes } from "../services/NoteServices";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import styles from './CreateNote.module.css'





function CreateNote() {


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const noteObj = {

        "title": "",
        "description": "",
        "isPined": false,
        "isArchived": false,
        "isDeleted": false,
        "color": "#ffffff"
    }
    const handleCreateNote = () => {
        setIsFirstInputClicked(false)
        addNotes(noteObj)
    }

    const [isFirstInputClicked, setIsFirstInputClicked] = useState(false);

    const handleFirstInputClick = () => {
        setIsFirstInputClicked(true);
    };


    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "15px" }}>
                {!isFirstInputClicked ? (
                    <div className={styles.container} style={{ width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", gap: "7px" }}>
                        <input className={styles.input_text} style={{ width: "25%", border: "none" }} type="text" placeholder="Take a note..." onClick={handleFirstInputClick} />
                        <CheckBoxOutlinedIcon /><BrushOutlinedIcon /><ImageOutlinedIcon />
                    </div>
                ) : (
                    <>
                        <div className={styles.container} style={{ width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", gap: "7px" }}>
                            <input className={styles.input_text} style={{ width: "30%", border: "none" }} type="text" placeholder="Title" onChange={(e) => { noteObj.title = e.target.value }} />
                        </div>
                        <div className={styles.container} style={{ width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", gap: "7px" }}>
                            <input className={styles.input_text} style={{ width: "30%", border: "none" }} type="text" placeholder="Take a note..." onChange={(e) => { noteObj.description = e.target.value }} />
                        </div>
                        <div style={{ width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", gap: "7px" }}>
                            <NotificationsOutlinedIcon />
                            <PersonAddAltOutlinedIcon />
                            <ColorLensOutlinedIcon />
                            <ImageOutlinedIcon />
                            <ArchiveOutlinedIcon />
                            <Button
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                sx={{ minWidth: 0 }}
                            ><MoreVertOutlinedIcon /></Button>
                            <UndoOutlinedIcon />
                            <RedoOutlinedIcon />
                            <Button onClick={handleCreateNote}>Close</Button>

                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>Add Label</MenuItem>
                                <MenuItem onClick={handleClose}>Add Drawing</MenuItem>
                                <MenuItem onClick={handleClose}>Show Checkboxes</MenuItem>
                            </Menu>



                        </div>
                    </>
                )}

            </div>
        </>
    )
}

export default CreateNote