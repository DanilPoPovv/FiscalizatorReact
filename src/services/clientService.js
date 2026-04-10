import { getBaseHeaders } from "./baseHeaderProvider.js";
const BASE_URL = "http://localhost:5068/Client";
const SEARCH_URL = BASE_URL.concat("/Search");

export async function getClients() {
    const noFilterRequest = {
        ClientCode : "",
        Name : "",
        Address : "",
        Page : 1,
        PageSize : 10
    }
    const res = await fetch(SEARCH_URL, {
        body : JSON.stringify(noFilterRequest),
        method: "POST",
        headers: getBaseHeaders(),
    });

    const data = await res.json();
    return data;
}

export async function createClient(data) {
    const request = {
        ClientCode: data.ClientCode,
        Address: data.Address,
        Name: data.Name,
    };

    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: getBaseHeaders(),
        body: JSON.stringify(request),
    });

    return await res.json();
}

export async function editClient(data) {
    const request = {
        Id: data.Id,
        ClientCode: data.ClientCode,
        Address : data.Address,
        Name: data.Name,
    };
    const res = await fetch(BASE_URL, {
        method: "PUT",
        headers: getBaseHeaders(),
        body: JSON.stringify(request),
    });

    return await res.json();
}

export async function deleteClient(data) {
    console.log(baseHeaders);
    const res = await fetch(BASE_URL, {
        method: "DELETE",
        headers: getBaseHeaders(),
        body: JSON.stringify({ ClientCode: data.ClientCode }),
    });

    if (res.status === 204){
        return;
    }
    const responseData = await res.json();
    return responseData;
}