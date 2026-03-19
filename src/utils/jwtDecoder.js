import { jwtDecode } from "jwt-decode"; 

const getToken = () => localStorage.getItem("token");

function decodeToken(){
    const token = getToken();
    console.log(token);
    if (token === null){
        return null;
    }
    try {    
        return jwtDecode(token);
    }
    catch(e){
        console.log("Ошибка декодирования", e)
        return null;
    }
}

export function getUserRole(){
    const token = decodeToken();
    return token["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
}