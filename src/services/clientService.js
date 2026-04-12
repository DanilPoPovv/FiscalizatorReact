import apiFetch from "./apiFetch.js";

const BASE_URL = "http://localhost:5068/Client";
const SEARCH_URL = BASE_URL + "/Search";

export async function getClients() {
  return await apiFetch(SEARCH_URL, {
    method: "POST",
    body: {
      ClientCode: "",
      Name: "",
      Address: "",
      Page: 1,
      PageSize: 10
    }
  });
}

export async function createClient(data) {
  return await apiFetch(BASE_URL, {
    method: "POST",
    body: {
      ClientCode: data.ClientCode,
      Address: data.Address,
      Name: data.Name
    }
  });
}

export async function editClient(data) {
  return await apiFetch(BASE_URL, {
    method: "PUT",
    body: {
      Id: data.Id,
      ClientCode: data.ClientCode,
      Address: data.Address,
      Name: data.Name
    }
  });
}

export async function deleteClient(data) {
  return await apiFetch(BASE_URL, {
    method: "DELETE",
    body: {
      ClientCode: data.ClientCode
    }
  });
}