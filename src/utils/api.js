import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3?api_key=b724b4c18ec7299caa9b46a8300effa2';


const headers = {
    Authorization: "bearer " + api_key,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
