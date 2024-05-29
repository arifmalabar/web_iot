import {ambil_suhuruang, ambil_suhutubuh} from "./endpoint.js";
import {showDataSuhuTubuh, showDataSuhuRuang} from "../datatable.js";
export function showRecapt() {
    
}
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
    console.log('oke');
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