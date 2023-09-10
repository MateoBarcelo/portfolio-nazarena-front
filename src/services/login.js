import axios from 'axios'

const config = {
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
}
const baseUrl = `${import.meta.env.apiURL}/api/login`

const login = async credentials => {
    const response = await axios.post(baseUrl, credentials,config)
    return response.data
}

export default { login }