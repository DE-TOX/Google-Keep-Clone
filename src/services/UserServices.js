import axios from "axios";

export const signupUser = async (userDetails) => {
    try {
        const response = await axios.post("https://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp", userDetails);
        
        console.log(response.data);
        // window.localStorage.setItem(, value);
        // Handle successful signup (e.g., redirect to login page)
    } catch (error) {
        console.error(error);
        // Handle errors (e.g., show an error message)
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await axios.post("https://fundoonotes.incubation.bridgelabz.com/api/user/login", credentials);
        
        const data = response.data;
        window.localStorage.setItem("token", data.id);
        return response;
        // Handle successful signup (e.g., redirect to login page)
    } catch (error) {
        alert("Error logging in. Please check your credentials.");
        // Handle errors (e.g., show an error message)
    }
};


