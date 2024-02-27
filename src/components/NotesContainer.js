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

    useEffect(() => {
        console.log(noteList);
    }, [noteList])


    return (
        <>




            <CreateNote style={{ overflow: "hidden" }} />



            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "7px", justifyContent: "center", alignItems: "center",overflow: "hidden" }}>
                {noteList.length ? noteList?.map(ele => { return <NoteCard noteObj={ele} /> }) : (<span> Loading....</span>)}
                {/* <NoteCard /> */}
            </div>







        </>
    )
}

export default NoteContainer