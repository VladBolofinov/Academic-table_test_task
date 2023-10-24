import axios from "axios";

export const useHttp = () => {
    const fetchData = async () => {
        try {
            const response = await axios({
                method: 'get',
                url: 'https://bgaa.by/test'
            })
            console.log(response.data);
            return response.data;
        } catch (e) {
            throw e;
        }
    }
    return {
        fetchData
    }
}