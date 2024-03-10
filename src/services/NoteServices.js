import axios from "axios";
const baseUrl = "https://fundoonotes.incubation.bridgelabz.com/api/notes/"

const configForNotes = () => {
    const accessToken = localStorage.getItem("token")
    console.log(accessToken)
    const header = {
        headers: {
            "Content-Type": "application/json",
            Authorization: accessToken
        }
    }
    return header
}
export const getNotes = async () => {
    try {
        const response = await axios.get(`${baseUrl}getNotesList`, configForNotes());
        return (response.data.data.data)
        // window.localStorage.setItem(, value);
        // Handle successful signup (e.g., redirect to login page)
    } catch (error) {
        console.error(error);
        // Handle errors (e.g., show an error message)
    }

};

export const addNotes = async (noteObj) => {
    try {
        const response = await axios.post(`${baseUrl}addNotes`, noteObj, configForNotes());
        return response
    } catch (error) {
        console.error(error);
        // Handle errors (e.g., show an error message)
    }

}


export const archiveNotes = async (noteObj) => {
    try {
        const response = await axios.post(`${baseUrl}archiveNotes`, noteObj, configForNotes())
        return response
    } catch (error) {
        console.error(error);
    }
}

export const getArchive = async () => {
    try {
        const response = await axios.get(`${baseUrl}getArchiveNotesList`, configForNotes());
        return (response.data.data.data)
        // window.localStorage.setItem(, value);
        // Handle successful signup (e.g., redirect to login page)
    } catch (error) {
        console.error(error);
        // Handle errors (e.g., show an error message)
    }

};

export const trashNotes = async (noteObj) => {
    try {
        const response = await axios.post(`${baseUrl}trashNotes`, noteObj, configForNotes())
        return response
    } catch (error) {
        console.error(error);
    }
}


export const getTrash = async () => {
    try {
        const response = await axios.get(`${baseUrl}getTrashNotesList`, configForNotes());
        console.log(response.data.data.data);
        return (response.data.data.data)
        // window.localStorage.setItem(, value);
        // Handle successful signup (e.g., redirect to login page)
    } catch (error) {
        console.error(error);
        // Handle errors (e.g., show an error message)
    }

};

export const updateColor = async (noteObj) => {
    try {
        const response = await axios.post(`${baseUrl}changesColorNotes`, noteObj, configForNotes());
        console.log(response.data.data.data);
        return (response.data.data.data)
        // window.localStorage.setItem(, value);
        // Handle successful signup (e.g., redirect to login page)
    } catch (error) {
        console.error(error);
        // Handle errors (e.g., show an error message)
    }

};

export const deleteForever = async (noteObj) => {
    try {
        const response = await axios.post(`${baseUrl}deleteForeverNotes`, noteObj, configForNotes())
        return response
    } catch (error) {
        console.error(error);
    }
}

export const updateNote = async (noteObj) => {
    try {
        const response = await axios.post(`${baseUrl}updateNotes`, noteObj, configForNotes())
        return response
    } catch (error) {
        console.error(error);
    }
}