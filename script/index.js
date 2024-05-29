import chartOption from "./chartdata.js";
import { getDataSuhuTubuh, getDataSuhuRuang, recaptSuhu } from "./fetch/fetch_data.js";
import { doShort } from "./shorting.js";
import showTime from "./time.js";
getDataSuhuTubuh();  
getDataSuhuRuang();
showTime();
chartOption();
recaptSuhu();
setInterval(() => {
    recaptSuhu();
    getDataSuhuTubuh();  
    getDataSuhuRuang();
}, 5000);
doShort();