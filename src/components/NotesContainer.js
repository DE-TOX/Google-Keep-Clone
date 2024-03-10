import { useEffect, useState, useContext } from "react";
import { getNotes } from "../services/NoteServices";
import NoteCard from "./NoteCard";
import CreateNote from "./CreateNote";
import ViewModeContext from './ViewModeContext';


function NoteContainer({ updateView }) {
    const [noteList, setNoteList] = useState([])
    const [refreshKey, setRefreshKey] = useState(0);
    const { viewMode, setViewMode } = useContext(ViewModeContext);
    const [isLoading, setIsLoading] = useState(true);
    const fetchNotes = async () => {
        try {
            const fetchedNotes = await getNotes();
            setNoteList(fetchedNotes.filter(note => !note.isArchived && !note.isDeleted));
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching notes:', error);
            setIsLoading(false);
        }
    };
    useEffect(() => {
        fetchNotes();
        console.log(updateView);
        return () => {
            console.log('Component Unmounted');
        };
    }, []);
    useEffect(() => {
        fetchNotes();
    }, [refreshKey]);
    const refreshNotes = () => {
        setRefreshKey(prevKey => prevKey + 1);
    };
    const updateNoteList = (action, noteObj) => {
        if (action === "add")
            setNoteList([noteObj, ...noteList])
        else if (action === "archive" || action === "trash") {
            setNoteList(noteList.filter(note => note.id !== noteObj.id));
        }
        else if (action === "update") {
            setNoteList(noteList.map((note) => {
                if (note.id === noteObj.id) return noteObj
                return note
            }))
            refreshNotes();
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
                {viewMode === 'grid' ? <div style={{ display: "flex", flexDirection: "column", gap: "15px", flexWrap: "wrap", justifyContent: "center", alignContent: "center", alignItems: "center", width: "100vw", marginBottom: 22 }}>

                    {isLoading ? (<span>Loading...</span>) : noteList.length ? noteList.map(ele => <NoteCard widthCard={500} noteObj={ele} updateNoteList={updateNoteList} />) : (<span>Please add a note</span>)}
                    {/* {noteList.length ? noteList?.map(ele => { return <NoteCard widthCard={500} noteObj={ele} updateNoteList={updateNoteList} /> }) : (<span> Loading....</span>)} */}
                </div> :
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "7px", justifyContent: "center", alignItems: "center", marginBottom: 22 }}>

                        {isLoading ? (<span>Loading...</span>) : noteList.length ? noteList.map(ele => <NoteCard widthCard={260} noteObj={ele} updateNoteList={updateNoteList} />) : (<span>Please add a note</span>)}
                        {/* {noteList.length ? noteList?.map(ele => { return <NoteCard widthCard={260} noteObj={ele} updateNoteList={updateNoteList} /> }) : (<span> Loading....</span>)} */}
                    </div>}
            </div>
        </>
    )
}
export default NoteContainer

{/* <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "5px", marginBottom: 22 }}> */ }