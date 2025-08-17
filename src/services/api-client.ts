import axios from "axios";

export default axios.create ({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "73f0d9d82872412694a7c29fc4d5fc8b"
    }
})