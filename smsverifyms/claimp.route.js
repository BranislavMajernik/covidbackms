const axios = require('axios');

const express = require('express');
const claimpRoutes = express.Router();

// Defined store route
claimpRoutes.route('/claimp').post(function (req, res) {
  let update = req.body;
  updateDBpatient(update);

      res.status(200).json({update});
});

const DEBUG = process.env.NODE_ENV === "development";

axios.interceptors.request.use((config) => {
     console.log("✉️: request:  ", config); 

    /** In dev, intercepts request and logs it into console for dev */
    if (DEBUG) { console.info("✉️ ", config); }
    return config;
}, (error) => {
    if (DEBUG) { console.error("✉️ ", error); }
    return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
    console.log("✉️ response: ", response);
    if(response.status === 401) {
         alert("You are not authorized");
    }
    return response;
}, (error) => {
    if (error.response && error.response.data) {
        return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
});

function updateDBpatient(person){

    const obj_person = {
        telephone: person.telephone,
    };
    console.log("Som tu!");
    console.log(obj_person.telephone);
    return axios.put('https://bnwcsnniopjzils-atpdbbmsk.adb.uk-london-1.oraclecloudapps.com/ords/books_admin/covidp/patients/claim',obj_person).catch(() => {});
    
}

module.exports = claimpRoutes;