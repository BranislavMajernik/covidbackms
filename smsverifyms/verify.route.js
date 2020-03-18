const axios = require('axios');

const express = require('express');
const verifyRoutes = express.Router();

function generateSMS(phone){
    var sms=phone.substring(1,5);
    return sms;
    }

// Defined store route
verifyRoutes.route('/add').post(function (req, res) {
  let insert = req.body;
  var rsms = generateSMS(insert.PhoneNumber);
  saveDBperson(insert);
  saveDBsms(insert.PhoneNumber, rsms);
  console.log(insert, rsms);
      res.status(200).json({rsms});
});


function saveDBperson(person){

    const obj_person = {
        telephone: person.PhoneNumber,
        firstname: person.FirstName,
        lastname: person.LastName,
        street: person.Street,
        strnumber: person.StrNumber,
        city: person.City

    };
    console.log(obj_person);
    return axios.post('https://bnwcsnniopjzils-atpdbbmsk.adb.uk-london-1.oraclecloudapps.com/ords/books_admin/c19_patients/', obj_person).catch(() => {});
    
}

function saveDBsms(phone,sms){

    const obj_phone = {
        telephone: phone,
        codesms: sms,
        datetime: '18.3.2020:21:35'
        
    };
    console.log(obj_phone);
    return axios.post('https://bnwcsnniopjzils-atpdbbmsk.adb.uk-london-1.oraclecloudapps.com/ords/books_admin/c19_sms/', obj_phone).catch(() => {});
    
}

module.exports = verifyRoutes;