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
import { Hidden } from "@mui/material";
import FormatColorResetOutlinedIcon from '@mui/icons-material/FormatColorResetOutlined';





function CreateNote({ updateNoteList }) {


    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorEl2, setAnchorEl2] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    // const [moreMenuOpen, setMoreMenu] = useState(false)
    const open2 = Boolean(anchorEl2);

    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };

    const handleClose2 = () => {
        setAnchorEl2(null);
        // setMoreMenu(!moreMenuOpen)
    };

    const [noteObj, setNoteObj] = useState({
        "title": "",
        "description": "",
        "isPined": false,
        "isArchived": false,
        "isDeleted": false,
        "color": "#ffffff"
    });
    const handleColor = (action) => {

        setNoteObj(prevNoteObj => ({
            ...prevNoteObj,
            color: action
        }));

    }
    const handleCreateNote = async () => {
        setIsFirstInputClicked(false)
        if (noteObj.title.length !== 0) {
            const response = await addNotes(noteObj)


            noteObj.title = ""
            noteObj.description = ""
            updateNoteList("add", response?.data?.status?.details)
        }
        setNoteObj(prevNoteObj => ({
            ...prevNoteObj,
            color:  "#ffffff"
        }));

    }

    const [isFirstInputClicked, setIsFirstInputClicked] = useState(false);

    const handleFirstInputClick = () => {
        setIsFirstInputClicked(true);
    };


    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "15px", overflow: Hidden }}>
                {!isFirstInputClicked ? (
                    <div style={{ width: "40vw", display: "flex", justifyContent: "center", alignItems: "center", gap: "7px", boxShadow: "5px 5px 10px black", borderRadius: "5px", height: "50px" }} onClick={handleFirstInputClick}>
                        {/* <input className={styles.input_text} style={{ width: "25%", border: "none" }} type="text" placeholder="Take a note..."  /> */}
                        <span style={{ width: "75%", border: "none", alignItems: "" }}>Take a note ...</span>
                        <CheckBoxOutlinedIcon /><BrushOutlinedIcon /><ImageOutlinedIcon />
                    </div>
                ) : (
                    <>
                        <div style={{ boxShadow: "5px 5px 17px black", borderRadius: "5px" }}>
                            <div style={{ width: "35vw", display: "flex", justifyContent: "center", alignItems: "center", gap: "7px", marginBottom: "10px" }}>
                                <input style={{ width: "90%", border: "none" }} type="text" placeholder="Title" onChange={(e) => { noteObj.title = e.target.value }} />
                            </div>
                            <div style={{ width: "35vw", display: "flex", justifyContent: "center", alignItems: "center", gap: "7px" }}>
                                <input style={{ width: "90%", border: "none" }} type="text" placeholder="Take a note..." onChange={(e) => { noteObj.description = e.target.value }} />
                            </div>
                            <div style={{ width: "35vw", display: "flex", justifyContent: "center", alignItems: "center", gap: "15px" }}>
                                <div style={{ width: "90%", display: "flex", justifyContent: "center", alignItems: "center", gap: "7px" }}>
                                    <NotificationsOutlinedIcon />
                                    <PersonAddAltOutlinedIcon />
                                    <Button color="inherit" sx={{ minWidth: 0 }}
                                        aria-controls={open2 ? 'color-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open2 ? 'true' : undefined}
                                        onClick={handleClick2}
                                    ><ColorLensOutlinedIcon /></Button>
                                    <ImageOutlinedIcon />
                                    <ArchiveOutlinedIcon />
                                    <Button
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                        sx={{ minWidth: 0, color: "inherit" }}
                                    ><MoreVertOutlinedIcon /></Button>
                                    <UndoOutlinedIcon />
                                    <RedoOutlinedIcon />
                                    <Button onClick={handleCreateNote} sx={{ marginLeft: 5 }}>Close</Button>

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
                                                <div style={{ width: "25px", height: "25px", backgroundColor: "#f39f76", borderRadius: "50%" }} onClick={() => handleColor("#f39f76")}></div>
                                                <div style={{ width: "25px", height: "25px", backgroundColor: "#FAAFA8", borderRadius: "50%" }} onClick={() => handleColor("#FAAFA8")}></div>
                                                <div style={{ width: "25px", height: "25px", backgroundColor: "#fff8b8", borderRadius: "50%" }} onClick={() => handleColor("#fff8b8")}></div>
                                                <div style={{ width: "25px", height: "25px", backgroundColor: "#e2f6d3", borderRadius: "50%" }} onClick={() => handleColor("#e2f6d3")}></div>
                                                <div style={{ width: "25px", height: "25px", backgroundColor: "#b4ddd3", borderRadius: "50%" }} onClick={() => handleColor("#b4ddd3")}></div>
                                                <div style={{ width: "25px", height: "25px", backgroundColor: "#d4e4ed", borderRadius: "50%" }} onClick={() => handleColor("#d4e4ed")}></div>
                                                <div style={{ width: "25px", height: "25px", backgroundColor: "#aeccdc", borderRadius: "50%" }} onClick={() => handleColor("#aeccdc")}></div>
                                                <div style={{ width: "25px", height: "25px", backgroundColor: "#d3bfdb", borderRadius: "50%" }} onClick={() => handleColor("#d3bfdb")}></div>
                                                <div style={{ width: "25px", height: "25px", backgroundColor: "#f6e2dd", borderRadius: "50%" }} onClick={() => handleColor("#f6e2dd")}></div>
                                                <div style={{ width: "25px", height: "25px", backgroundColor: "#e9e3d4", borderRadius: "50%" }} onClick={() => handleColor("#e9e3d4")}></div>
                                                <div style={{ width: "25px", height: "25px", backgroundColor: "#efeff1", borderRadius: "50%" }} onClick={() => handleColor("#efeff1")}></div>
                                            </div>
                                        </div></MenuItem>
                                    </Menu>
                                </div>



                            </div>
                        </div>
                    </>
                )}

            </div>
        </>
    )
}

export default CreateNote