import apiFetch from "./apiFetch.js";

const BASE_URL = "http://localhost:5068";

const SEARCH_URL = BASE_URL + "/Client/Search";

const searchRequest = {
  Page: 1,
  PageSize: 10,
  ClientCode: "",
  Name: "",
  Address: ""
};

export async function getClients() {
  return await apiFetch(SEARCH_URL, {
    method: "POST",
    body: searchRequest
  });
}

export async function searchClientsWithFilters(filters) {
  const request = {
    ...searchRequest,
    ClientCode: filters.ClientCode,
    Name: filters.Name,
    Address: filters.Address,
    Page: filters.Page,
    PageSize: filters.PageSize
  };

  return await apiFetch(SEARCH_URL, {
    method: "POST",
    body: request
  });
}

export async function createClient(request) {
  const body = {
    ClientCode: request.ClientCode,
    Name: request.Name,
    Address: request.Address
  };

  return await apiFetch(BASE_URL + "/Client", {
    method: "POST",
    body
  });
}

export async function editClient(request) {
  const body = {
    Id: request.Id,
    ClientCode: request.ClientCode,
    Name: request.Name,
    Address: request.Address
  };

  return await apiFetch(BASE_URL + "/Client", {
    method: "PUT",
    body
  });
}

export async function deleteClient(request) {
  const body = {
    ClientCode: request.ClientCode
  };
  console.log(body);
  return await apiFetch(BASE_URL + "/Client", {
    method: "DELETE",
    body
  });
}