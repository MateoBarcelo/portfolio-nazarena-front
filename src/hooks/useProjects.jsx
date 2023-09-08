import { useEffect, useState } from 'react'
import projectService from '../services/project.js'

const useProjects = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        projectService.getAll()
          .then(projects => {
            setProjects(projects);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

    const mappedProjects = projects.map((proj) => {
        return({
            id: proj.id,
            title: proj.name,
            year: proj.year,
            desc: proj.desc,
            img: proj.img,
            category: proj.category,
            linkto: proj.linkto
        })
    })

    return [mappedProjects]

}

export default useProjects