import { useEffect, useState } from "react"
import NoteCard from "./NoteCard"
import { getTrash } from "../services/NoteServices"




function TrashContainer() {


    const [trashList, setTrashList] = useState([])

    const TrashNotes = async () => {
        try {
            const fetchedNotes = await getTrash();
            setTrashList(fetchedNotes);
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    };
    useEffect(() => {
        TrashNotes()
        return () => {
            console.log("Component Unmounted");
        }
    },[])
    const updateTrashList = (action, noteObj) => {
        if (action === "restore") {
            setTrashList(trashList.filter(note => note.id !== noteObj.id));
        }
        else if(action === "delete"){
            setTrashList(trashList.filter(note => note.id !== noteObj.id))
        }
        else {
            setTrashList(trashList.map((note) => {
                if (note.id === noteObj.id) return noteObj
                return note
            }))
        }
    }
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>

            {/* <CreateNote style={{ overflow: "hidden" }} updateNoteList={updateNoteList} /> */}



            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "7px", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
                {trashList.length ? trashList?.map(ele => { return <NoteCard noteObj={ele} updateTrashList={updateTrashList} /> }) : (<span> Loading....</span>)}
                {/* <NoteCard /*updateNoteList={updateNoteList} noteObj={{ "title": "nvr", "description": "ekwl" }} /> */}
            </div>
        </div>
    )
}

export default TrashContainer