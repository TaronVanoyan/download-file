import axios from "axios";
const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

export const getCSVTemplate = () => {
    return axios({
        url: "upload/export-sample",
        method: "GET",
        headers: {
            "X-CSRF-TOKEN": csrfToken,
        }
    });
}
