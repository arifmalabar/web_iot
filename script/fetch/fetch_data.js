import {ambil_suhuruang, ambil_suhutubuh, ambil_recapt} from "./endpoint.js";
import {showDataSuhuTubuh, showDataSuhuRuang} from "../datatable.js";
import { showRecapt } from "../recapt.js";
export function getDataSuhuTubuh() {
    
    const requestOptions = {
    method: "GET",
    redirect: "follow"
    };
    
    fetch(ambil_suhutubuh, requestOptions)
    .then((response) => {
        return response.json()
    })
    .then((result) => { 
        showDataSuhuTubuh(result);
    }).catch((error) => {
        console.error(error)
    });
}
export function getDataSuhuRuang() {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    
    fetch(ambil_suhuruang, requestOptions)
    .then((response) => {
        return response.json()
    })
    .then((result) => { 
        showDataSuhuRuang(result);
    }).catch((error) => {
        console.error(error)
    });
}
export async function recaptSuhu() {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    
    await fetch(ambil_recapt, requestOptions)
    .then((response) => {
        return response.json()
    })
    .then((result) => { 
        showRecapt(result);
    }).catch((error) => {
        console.error(error)
    });
}