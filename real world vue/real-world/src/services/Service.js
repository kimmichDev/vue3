import axios from 'axios';
const appApi = axios.create({
    baseURL: "https://my-json-server.typicode.com/HtetAungLaing/fake-server",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
}
);
export default {
    getMembers() {
        return appApi.get('/members');
    },
    getMember(id) {
        return appApi.get('/members/' + id);
    }
}