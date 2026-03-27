import { useEffect, useState } from "react";
import InfoListAndSearch from "../InfoList/InfoListWithSearch";

export default function ClientListPage(){
    const [data, setData] = useState([]);
    const [filters, setFilters] = useState({});

    useEffect(() => {
        getClients();
    }, []);
    const baseHeaders = 
    {
        "Content-Type": "application/json",
        ///В БУДУЩЕМ ТУТ БУДЕТ BEARER TOKEN
    }
    async function getClients() {
        const res = await fetch("http://localhost:5068/Client", {
            method : "GET",
            headers : baseHeaders
        })

        const result = await res.json();

        setData(result);
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

    async function handleAction(actionType, requestData) {
        switch(actionType){
            case "edit":
                await editClient(requestData);
                break;
            case "create":
                await createClient(requestData);
                break;
            case "delete":
                await deleteClient(requestData);
                break;
            default:   
                throw new Error("Передан не поддерживаемый тип действия")
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
    async function deleteClient(requestData) {
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
    return (
        <InfoListAndSearch
        headers={["ИНН", "Наименование", "Адрес", "Действие"]}
        criteriaList={[
        { label: "Имя", field: "name" },
        { label: "Email", field: "email" },
        { label: "Адрес", field: "address" },
        ]}
        data={data}
        onSearch={handleSearch}
        onAction={handleAction}
        />
    )
}