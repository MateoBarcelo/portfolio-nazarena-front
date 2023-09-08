import axios from 'axios'

const baseUrl = "http://localhost:3001/api/projects"
const mediaUrl = "http://localhost:3001/api/upload"

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