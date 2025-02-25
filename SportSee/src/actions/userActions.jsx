import axios from "axios"

export const getUser=(id) =>{
    return axios.get(`http://localhost:3000/user/${id}`)
}
export const getUserActivity=(id) =>{
    return axios.get(`http://localhost:3000/user/${id}/activity`)
}

export const getUserAverageSessions=(id) =>{
    return axios.get(`http://localhost:3000/user/${id}/average-sessions`)
}

export const getUserPerformance=(id) =>{
    return axios.get(`http://localhost:3000/user/${id}/performance`)
}
