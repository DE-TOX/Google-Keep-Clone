import { useEffect, useState, useContext } from "react";
import { getNotes } from "../services/NoteServices";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import NoteCard from "./NoteCard";
import CreateNote from "./CreateNote";
import ViewModeContext from "./ViewContext";









function NoteContainer() {
    const [noteList, setNoteList] = useState([])
    const { viewMode } = useContext(ViewModeContext);
    console.log(viewMode);
    // const notes = []
    // async  ()=>{
    //     notes = await getNotes()
    // }()
    // useEffect(() => {

    //     setNoteList(notes.filter(note => !note.isArchived || !note.isDeleted))
    //     // return () => {
    //     //     console.log("Component Unmounted");
    //     // }
    // }, [])


    const fetchNotes = async () => {
        try {
            const fetchedNotes = await getNotes();
            setNoteList(fetchedNotes.filter(note => !note.isArchived && !note.isDeleted));
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    };


    useEffect(() => {
        

        fetchNotes();

        return () => {

            console.log('Component Unmounted');
        };
    }, []);

    const updateNoteList = (action, noteObj) => {
        if (action === "add")
            setNoteList([noteObj, ...noteList])
        else if (action === "archive" || action === "trash") {
            setNoteList(noteList.filter(note => note.id !== noteObj.id));
        }
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

                {false ? <div style={{ display: "flex", flexDirection: "column", gap: "15px", justifyContent: "center", alignItems: "center", width: "100vw", marginBottom: 22 }}>
                    {noteList.length ? noteList?.map(ele => { return <NoteCard widthCard={500} noteObj={ele} updateNoteList={updateNoteList} /> }) : (<span> Loading....</span>)}
                </div> :
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "7px", justifyContent: "center", alignItems: "center", marginBottom: 22 }}>
                        {noteList.length ? noteList?.map(ele => { return <NoteCard widthCard={260} noteObj={ele} updateNoteList={updateNoteList} /> }) : (<span> Loading....</span>)}
                    </div>}

                {/* <NoteCard updateNoteList={updateNoteList} noteObj={{"title":"nvr","description" : "ekwl"}} /> */}





            </div>






        </>
    )
}

export default NoteContainer