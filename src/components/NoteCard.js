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
import { archiveNotes, deleteForever, trashNotes, updateColor } from "../services/NoteServices";
import { useLocation } from "react-router-dom";
import UnarchiveOutlinedIcon from '@mui/icons-material/UnarchiveOutlined';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import EditNote from "./EditNote";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: "none",
    p: 4,
};





function NoteCard({ updateNoteList, noteObj, widthCard, updateArchiveList, updateTrashList }) {

    // const { noteObj } = props

    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorEl2, setAnchorEl2] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isEdit, setEdit] = useState(false);
    const location = useLocation();
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
    const handleModalOpen = () => {
        setEdit(true)
        setOpenModal(true)
    };
    const handleModalClose = () => {
        setEdit(false)
        setOpenModal(false);
    }
    // const handleOpenModal = () => {
    //     setOpenModal(true);
    // console.log(openModal);

    // };

    const handleNotesOperation = (action) => {

        if (action === "archive") {
            archiveNotes({
                noteIdList: [noteObj?.id],
                isArchived: true
            })
            updateNoteList("archive", noteObj)
        }
        else if (action === "trash") {
            trashNotes({
                noteIdList: [noteObj?.id],
                isDeleted: true
            })
            handleClose()
            updateNoteList("trash", noteObj)
        }
        else if (action === "unarchive") {
            archiveNotes({
                noteIdList: [noteObj?.id],
                isArchived: false
            })
            updateArchiveList("unarchive", noteObj)
        } else if (action === "restore") {
            trashNotes({
                noteIdList: [noteObj?.id],
                isDeleted: false
            })
            handleClose()
            updateTrashList("restore", noteObj)
        } else if (action === "delete") {
            deleteForever({
                noteIdList: [noteObj?.id]
            })
            updateTrashList("delete", noteObj)
        }
        else {
            console.log(noteObj);
            noteObj.color = action
            updateColor({
                noteIdList: [noteObj?.id],
                color: action
            })
            console.log(noteObj);
            updateNoteList("color", noteObj)

        }

    }

    return (
        <>
            <Card variant="outlined" onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                spacing={12}
                style={{ alignSelf: "baseline" }}
                sx={{ width: widthCard, backgroundColor: noteObj.color, boxShadow: "1px 1px 5px black", margin: "5px" }}

            >
                <CardContent
                    onClick={handleModalOpen}>
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


                    {location.pathname === '/dashboard/archive' ? (
                        <Button color="inherit" sx={{ minWidth: 0 }}>
                            {/* Render a different icon or style the current icon differently */}
                            <UnarchiveOutlinedIcon sx={{ fontSize: "15px" }} onClick={() => handleNotesOperation("unarchive")} />
                        </Button>
                    ) : (
                        <Button color="inherit" sx={{ minWidth: 0 }}>
                            <ArchiveOutlinedIcon sx={{ fontSize: "15px" }} onClick={() => handleNotesOperation("archive")} />
                        </Button>
                    )}


                    {/* <Button color="inherit" sx={{ minWidth: 0 }}><ArchiveOutlinedIcon sx={{ fontSize: "15px" }} onClick={() => handleNotesOperation("archive")} /></Button> */}
                    <Button color="inherit" sx={{ minWidth: 0 }}
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick} ><MoreVertOutlinedIcon sx={{ fontSize: "15px" }} /></Button>

                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >{location.pathname === '/dashboard/trash' ? (<>
                        <MenuItem onClick={() => handleNotesOperation("restore")} >Restore</MenuItem>
                        <MenuItem onClick={() => handleNotesOperation("delete")} >Delete Forever</MenuItem> </>)
                        :
                        (<MenuItem onClick={() => handleNotesOperation("trash")} >Trash</MenuItem>)
                        }

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
                                <FormatColorResetOutlinedIcon style={{ borderRadius: "50%", border: "solid black 1px" }} onClick={() => handleNotesOperation("#Ffffff")} />
                                <div style={{ width: "25px", height: "25px", backgroundColor: "#FAAFA8", borderRadius: "50%" }} onClick={() => handleNotesOperation("#FAAFA8")}></div>
                                <div style={{ width: "25px", height: "25px", backgroundColor: "#f39f76", borderRadius: "50%" }} onClick={() => handleNotesOperation("#f39f76")}></div>
                                <div style={{ width: "25px", height: "25px", backgroundColor: "#fff8b8", borderRadius: "50%" }} onClick={() => handleNotesOperation("#fff8b8")}></div>
                                <div style={{ width: "25px", height: "25px", backgroundColor: "#e2f6d3", borderRadius: "50%" }} onClick={() => handleNotesOperation("#e2f6d3")}></div>
                                <div style={{ width: "25px", height: "25px", backgroundColor: "#b4ddd3", borderRadius: "50%" }} onClick={() => handleNotesOperation("#b4ddd3")}></div>
                                <div style={{ width: "25px", height: "25px", backgroundColor: "#d4e4ed", borderRadius: "50%" }} onClick={() => handleNotesOperation("#d4e4ed")}></div>
                                <div style={{ width: "25px", height: "25px", backgroundColor: "#aeccdc", borderRadius: "50%" }} onClick={() => handleNotesOperation("#aeccdc")}></div>
                                <div style={{ width: "25px", height: "25px", backgroundColor: "#d3bfdb", borderRadius: "50%" }} onClick={() => handleNotesOperation("#d3bfdb")}></div>
                                <div style={{ width: "25px", height: "25px", backgroundColor: "#f6e2dd", borderRadius: "50%" }} onClick={() => handleNotesOperation("#f6e2dd")}></div>
                                <div style={{ width: "25px", height: "25px", backgroundColor: "#e9e3d4", borderRadius: "50%" }} onClick={() => handleNotesOperation("#e9e3d4")}></div>
                                <div style={{ width: "25px", height: "25px", backgroundColor: "#efeff1", borderRadius: "50%" }} onClick={() => handleNotesOperation("#efeff1")}></div>
                            </div>
                        </div></MenuItem>
                    </Menu>
                </CardActions>
            </Card>
            <Modal
                open={openModal}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <EditNote style={{ overflow: "hidden" }}
                        noteId={noteObj}
                        updateNoteList={updateNoteList}
                        onModalClose={handleModalClose}
                    />
                </Box>
            </Modal>

        </>)
}

export default NoteCard




