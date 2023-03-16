import  {user}  from "./information.js";
import cowsay from "cowsay"


console.log(cowsay.say({
    text : `${user.nom} ${user.campus}`,
    e : "oO",
    T : "U "
}));
