import apiFetch from "./apiFetch.js";

const BASE_URL = "http://localhost:5068";
const SEARCH_URL = BASE_URL + "/SearchAdmin";

const searchRequest = {
  Page: 1,
  PageSize: 10,
  Name: "",
  Email: ""
};

export async function getUsers() {
  return await apiFetch(SEARCH_URL, {
    method: "POST",
    body: searchRequest
  });
}

export async function searchUsersWithFilters(filters) {
  const request = {
    ...searchRequest,
    Name: filters.Name,
    Email: filters.Email
  };

  return await apiFetch(SEARCH_URL, {
    method: "POST",
    body: request
  });
}

export async function createUser(request) {
  const body = {
    Name: request.Name,
    Email: request.Email,
    Password: request.Password
  };

  return await apiFetch(BASE_URL + "/CreateGlobalAdmin", {
    method: "POST",
    body
  });
}

export async function updateUser(request) {
  const body = {
    Id: request.Id,
    Name: request.Name,
    Email: request.Email,
    OldPassword: request.Password,
    NewPassword: request.NewPassword
  };

  return await apiFetch(BASE_URL + "/UpdateAdmin", {
    method: "PUT",
    body
  });
}

export async function deleteUser(request) {
  const body = {
    Id: request.Id
  };

  return await apiFetch(BASE_URL + "/Delete", {
    method: "DELETE",
    body
  });
}