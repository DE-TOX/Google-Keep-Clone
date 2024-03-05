import { useEffect, useState } from "react"
import NoteCard from "./NoteCard"
import { archiveNotes, getArchive } from "../services/NoteServices"



function ArciveContainer() {
    const [archiveList, setArchiveList] = useState([])

    const ArchiveNotes = async () => {
        try {
            const fetchedNotes = await getArchive();
            setArchiveList(fetchedNotes);
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    };
    useEffect(() => {
        ArchiveNotes()
        return () => {
            console.log("Component Unmounted");
        }
    },[])
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>

            {/* <CreateNote style={{ overflow: "hidden" }} updateNoteList={updateNoteList} /> */}



            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "7px", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
                {archiveList.length ? archiveList?.map(ele => { return <NoteCard noteObj={ele} /> }) : (<span> Loading....</span>)}
                {/* <NoteCard /*updateNoteList={updateNoteList} noteObj={{ "title": "nvr", "description": "ekwl" }} /> */}
            </div>
        </div>
    )
}

export default ArciveContainer