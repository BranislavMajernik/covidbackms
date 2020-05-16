const axios = require('axios');

const express = require('express');
const claimRoutes = express.Router();

// Defined store route
claimRoutes.route('/claim').post(function (req, res) {
  let update = req.body;
  updateDBperson(update);

      res.status(200).json({update});
});


function updateDBperson(person){

    const obj_person = {
        telephone: person.telephone,
    };
    console.log("Som tu!");
    console.log(obj_person.telephone);
    return axios.put('https://bnwcsnniopjzils-atpdbbmsk.adb.uk-london-1.oraclecloudapps.com/ords/books_admin/covid/clients/',{obj_person.telephone}).catch(() => {});
    
}

module.exports = claimRoutes;