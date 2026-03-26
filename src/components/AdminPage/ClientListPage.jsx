import { useState } from "react";

export default function ClientListPage(){
    const [data, setData] = useState([]);
    const [filters, setFilters] = useState({});

    const baseHeaders = 
    {
        "Content-Type": "application/json",
        ///В БУДУЩЕМ ТУТ БУДЕТ BEARER TOKEN
    }
    async function handleSearch(newFilters){
        setFilters(newFilters);

        const res = await fetch("/api/1234", {
            method : "POST",
            headers: baseHeaders,
            body : JSON.stringify(newFilters)
        })
        const result = await res.json();

        setData(result);
    }

    async function action(actionType, requestData) {
        switch(actionType){
            case "edit":
                await editClient(requestData);
        }
    }
    
    async function editClient(requestData) {
        const request = {
            ClientCode : requestData.ClientCode,
            NewCode : requestData.NewClientCode,
            Location : requestData.Location,
            Name : requestData.Name
        }
        const res = await fetch("http://localhost:5068/Client",{
            method : "PUT",
            headers: baseHeaders,
            body : JSON.stringify(request)
        })

        const result = await res.json();

        setData(result);
    }
    async function createClient(requestData) {
        const request = {
            ClientCode : requestData.ClientCode,
            Address : requestData.Address,
            Name : requestData.Name
        }
        const res = await fetch("http://localhost:5068/Client",{
            method : "POST",
            headers: baseHeaders,
            body : JSON.stringify(request)
        })

        const result = await res.json();

        setData(result);
    }
    async function createClient(requestData) {
        const request = {
            ClientCode : requestData.ClientCode,
        }
        const res = await fetch("http://localhost:5068/Client",{
            method : "DELETE",
            headers: baseHeaders,
            body : JSON.stringify(request)
        })

        const result = await res.json();

        setData(result);
    }
}