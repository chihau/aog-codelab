'use strict';
// Importar el módulo Dialogflow desde la biblioteca cliente de Actions on Google
const {dialogflow} = require('actions-on-google');

// Importar la biblioteca firebase-functions
const functions = require('firebase-functions');

// Instanciamos el cliente de Dialogflow
const app = dialogflow({debug: true});

// Manejar el intent de Dialogflow llamado 'favorite color'
// Este intent captura el valor del parámetro 'color'
app.intent('favorite color', (conv, {color}) => {
    const luckyNumber = color.length;
    //  Responder con el número de la suerte y terminar
    conv.close('Your lucky number is ' + luckyNumber);
});

// Objeto de tipo DialogflowApp que maneja las HTTP Request de tipo POST
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
