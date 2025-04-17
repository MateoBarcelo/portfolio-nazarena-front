import axios from "axios";
import projectsJson from "../assets/projects.json";

const baseUrl = `${import.meta.env.VITE_APIURL}/api/projects`;
const mediaUrl = `${import.meta.env.VITE_APIURL}/api/upload`;

const create = async (newProject, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(baseUrl, newProject, config);
  return response.data;
};

const uploadImage = async (formData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(mediaUrl, formData, config);
  return response.data;
};

const getAll = async () => {
  return projectsJson.projects;
};

export default { create, getAll, uploadImage };
