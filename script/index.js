import { getDataSuhuTubuh, getDataSuhuRuang } from "./fetch/fetch_data.js";
import { doShort } from "./shorting.js";
getDataSuhuTubuh();  
getDataSuhuRuang();
doShort();