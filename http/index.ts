import axios from "axios";
  const API=axios.create({
    //key:VALUE   base url vaneko jun vat aaru url haru niskinxa
    
    baseURL:"http://localhost:4000/api/",
    headers:{
        "Content-Type":"application/json",//send vahira data ko format  
        ///frotend ley backend pathudha format k gahira xa banney kura chai content type   backend mah jadha kherii kun format mah janxaa tah string,number, data types mah jana sakxaa sadhaii sent gardha
        "Accept" : "application/json"//recieve hudha kasto ko format recieve garne 
    }
})
export default API