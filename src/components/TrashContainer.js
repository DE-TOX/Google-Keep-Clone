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
    // useEffect(async () => {
    //     const notes = await getTrash()
    //     setTrashList(notes)
    //     return () => {
    //         console.log("Component Unmounted");
    //     }
    // }, [])
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>

            {/* <CreateNote style={{ overflow: "hidden" }} updateNoteList={updateNoteList} /> */}



            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "7px", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
                {trashList.length ? trashList?.map(ele => { return <NoteCard noteObj={ele} /> }) : (<span> Loading....</span>)}
                {/* <NoteCard /*updateNoteList={updateNoteList} noteObj={{ "title": "nvr", "description": "ekwl" }} /> */}
            </div>
        </div>
    )
}

export default TrashContainer