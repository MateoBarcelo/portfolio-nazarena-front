import axios from 'axios'

const baseUrl = `${import.meta.env.VITE_APIURL}/api/projects`
const mediaUrl = `${import.meta.env.VITE_APIURL}/api/upload`

const create = async (newProject, token) => {
    
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(baseUrl, newProject, config)
    return response.data
}

const uploadImage = async (formData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(mediaUrl, formData, config)
    return response.data
}

const getAll = () => {
    const response = axios.get(baseUrl)

    return response.then(response => response.data)
}

export default {create, getAll, uploadImage}