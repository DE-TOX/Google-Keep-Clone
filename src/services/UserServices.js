import axios from "axios";

export const signupUser = async (userDetails) => {
    try {
        const response = await axios.post("https://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp", userDetails);
        console.log(response.data);
        // Handle successful signup (e.g., redirect to login page)
    } catch (error) {
        console.error(error);
        // Handle errors (e.g., show an error message)
    }
};




