const BASE_URL = "http://localhost:5068/Client";

const baseHeaders = {
    "Content-Type": "application/json",
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
        ClientId: data.Id,
        Code: data.Code,
        Location: data.Address,
        Name: data.Name,
    };

    const res = await fetch(BASE_URL, {
        method: "PUT",
        headers: baseHeaders,
        body: JSON.stringify(request),
    });

    return await res.json();
}

export async function deleteClient(data) {
    const res = await fetch(BASE_URL, {
        method: "DELETE",
        headers: baseHeaders,
        body: JSON.stringify({ ClientCode: data.ClientCode }),
    });

    return await res.json();
}