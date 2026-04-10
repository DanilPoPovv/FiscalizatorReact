export function getBaseHeaders(){
    return {
          "Content-Type": "application/json",
  "Authorization": "Bearer " + localStorage.getItem("token")
    }
}