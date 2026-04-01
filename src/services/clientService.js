const BASE_URL = "http://localhost:5068/Client";

const baseHeaders = {
  "Content-Type": "application/json",
  "Authorization": "Bearer " + localStorage.getItem("token")
};

export async function getClients() {
    const res = await fetch(BASE_URL, {
        method: "GET",
        headers: baseHeaders,
    });

    return await res.json();
}

export async function createClient(data) {
    const request = {
        ClientCode: data.ClientCode,
        Address: data.Address,
        Name: data.Name,
    };

    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: baseHeaders,
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
    console.log(request);
    const res = await fetch(BASE_URL, {
        method: "PUT",
        headers: baseHeaders,
        body: JSON.stringify(request),
    });

    return await res.json();
}

export async function deleteClient(data) {
    console.log(baseHeaders);
    const res = await fetch(BASE_URL, {
        method: "DELETE",
        headers: baseHeaders,
        body: JSON.stringify({ ClientCode: data.ClientCode }),
    });

    if (res.status === 204){
        return;
    }
    const responseData = await res.json();
    return responseData;
}