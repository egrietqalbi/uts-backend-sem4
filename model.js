import{readFileSync}from 'fs';
export function model(parameter){
    const data = readFileSync('./about.json');
    let hasil="";
    if(parameter == "indonesia"){
        hasil=JSON.parse(data).indonesia;
    }
    else if(parameter == "english"){
        hasil=JSON.parse(data).english;
    }
    return hasil;
}