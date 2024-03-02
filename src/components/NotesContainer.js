import { useEffect, useState } from "react";
import { getNotes } from "../services/NoteServices";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import NoteCard from "./NoteCard";
import CreateNote from "./CreateNote";





function NoteContainer() {
    const [noteList, setNoteList] = useState([])
    useEffect(async () => {
        const notes = await getNotes()
        setNoteList(notes)
        return () => {
            console.log("Component Unmounted");
        }
    }, [])

    const updateNoteList = (action, noteObj) => {
        if (action === "add")
            setNoteList([noteObj, ...noteList])
        else if (action === "archive" || action === "trash") { 
            setNoteList(noteList.filter(note => note.id !== noteObj.id)); }
        else {
            setNoteList(noteList.map((note) => {
                if (note.id === noteObj.id) return noteObj
                return note
            }))
        }
    }

    


    return (
        <>


            <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>

                <CreateNote style={{ overflow: "hidden" }} updateNoteList={updateNoteList} />



                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "7px", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
                    {noteList.length ? noteList?.map(ele => { return <NoteCard noteObj={ele} updateNoteList={updateNoteList} /> }) : (<span> Loading....</span>)}
                    {/* <NoteCard updateNoteList={updateNoteList} noteObj={{"title":"nvr","description" : "ekwl"}} /> */}
                </div>
            </div>






        </>
    )
}

export default NoteContainer