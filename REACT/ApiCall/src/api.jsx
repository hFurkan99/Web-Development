import axios from 'axios';


const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: "Client-ID MSN1jcJHIj6LpJu30SUoZNeK7I0l19Pm6jdsDvHVxsw",
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
};

export default searchImages;
