import axios from 'axios';

const URL = 'http://localhost:5000';

export const getAllAppointments = ()=>{

    try{
        return axios.get(`${URL}/api/appointment/all`);
    }
    catch(error){
        console.log("error in get all appointments " , error);
    }
}

export const addAppointment = async (data)=>{

    try{
        return await axios.post(`${URL}/api/appointment/add`,data);
    }
    catch(error){
        console.log("error in add appointment " , error);
    }
}

export const deleteUser= async (id) =>{
    try{
        return await axios.delete(`${URL}/api/appointment/${id}`);
    }
    catch(error){
        console.log("error in deleting appointments " , error);
    }

}

export const deleteAllAppointments = async (ids) => {
    try {
      const promises = ids.map((id) => axios.delete(`${URL}/api/appointment/${id}`));
      const responses = await Promise.all(promises);
      return responses;
    } catch (error) {
      console.log("error in deleting appointments ", error);
    }
  };

  export const getUser = async (token) => {
    try{
        return axios.post(`${URL}/api/auth/getuser/${token}`);
    }
    catch(error){
        console.log("error in getall appointments " , error);
    }
  };

  export const getPatients = async () =>{
    try{
        return axios.get(`${URL}/api/patient/all`);
    }
    catch(error){
        console.log("error in getall patients " , error);
    }
  };

  export const getPatientsByUserId = async (id) =>{
    try{
        return axios.get(`${URL}/api/patient/patientByUserId`, { params: { id } });
    }
    catch(error){
        console.log("error in get by userID patients " , error);
    }
  };

  export const getSchedule = async () =>{
    try{
        return axios.get(`${URL}/api/patient/getSchedule`);
    }
    catch(error){
        console.log("error in get Schedule  " , error);
    }
  };

  
