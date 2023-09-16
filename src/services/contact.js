import axios from 'axios'

const baseURL = `${import.meta.env.VITE_APIURL}/api/contact`

const sendMail = async mail => {

    const response = axios.post(baseURL, mail)

    return response.data
}

export default { sendMail }