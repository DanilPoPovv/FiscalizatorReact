import { getBaseHeaders } from "./baseHeaderProvider.js";

const baseAdminClientUrl = "http://localhost:5068";
const baseAdminClientSearchUrl = baseAdminClientUrl + "/SearchAdmin";
  const searchRequest = {
    Page : 1,
    PageSize : 10,
    Name : "",
    Email : ""
  }
export async function getUsers() {
  const response = await fetch(baseAdminClientSearchUrl,
    {
      method : "POST",
      body : JSON.stringify(searchRequest),
      headers : getBaseHeaders()
    }
  )
  return await response.json();
}


export async function searchUsersWithFilters(filters){
  const request = {
    ...searchRequest,
    Name : filters.Name,
    Email : filters.Email,
  }

  const response = await fetch(baseAdminClientSearchUrl, {
    method : "POST",
    body : JSON.searchRequest(request),
    headers : getBaseHeaders()
  });

  responseResult = await response.json();

  return responseResult;
}

export async function createUser(request){
  request = {
    Name : request.Name,
    Email : request.Email,
    Password : request.Password
  }
  const response = await fetch(baseAdminClientUrl + "/CreateGlobalAdmin", {
    method : "POST",
    body : JSON.stringify(request),
    headers : getBaseHeaders()
  });

  const responseResult = await response.json();

  return responseResult;
}

export async function updateUser(request){
  request = {
    Id : request.Id,
    Name : request.Name,
    Email : request.Email,
    OldPassword : request.Password,
    NewPassword : request.NewPassword
  }
  const response = await fetch(baseAdminClientUrl + "/UpdateAdmin", {
    method : "PUT",
    body : JSON.stringify(request),
    headers : getBaseHeaders()
  });

  const responseResult = await response.json();

  return responseResult;
}


export async function deleteUser(request){
  request = {
    Id : request.Id
  }

  const response = await fetch(baseAdminClientUrl + "/Delete", {
    method : "DELETE",
    body : JSON.stringify(request),
    headers : getBaseHeaders()
  });

  const responseResult = await response.json();
  if (responseResult.status === 204){
    return;
  }
  return responseResult;
}

