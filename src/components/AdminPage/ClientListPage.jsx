import { useEffect, useState } from "react";
import InfoListAndSearch from "../InfoList/InfoListWithSearch";
import Modal from "../ModalPages/Modal";
export default function ClientListPage(){
    const [data, setData] = useState([]);
    const [filters, setFilters] = useState({});
    const [modal, setModal] = useState(null);

    const dataNames =[
        { label: "Имя", field: "name" },
        { label: "Email", field: "email" },
        { label: "Адрес", field: "address" },
        ]
    useEffect(() => {
        getClients();
    }, []);
    const baseHeaders = 
    {
        "Content-Type": "application/json",
        ///В БУДУЩЕМ ТУТ БУДЕТ BEARER TOKEN
    }
    function performAction(actionType, requestData){
        setModal({
            actionType : actionType,
            data : requestData
        });
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

    async function handleConfirm() {
        switch(modal.actionType){
            case "edit":
                await editClient(modal.data);
                break;
            case "create":
                await createClient(modal.data);
                break;
            case "delete":
                await deleteClient(modal.data);
                break;
        }

    setModal(null);
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
        <div>
        <InfoListAndSearch
        headers={["ИНН", "Наименование", "Адрес", "Действие"]}
        criteriaList={dataNames}
        data={data}
        onSearch={handleSearch}
        onAction={performAction}
        />
        {modal && (
            <Modal onClose={() => setModal(null)} onSubmit={handleConfirm} fieldNames={dataNames}/>
        )}
    </div>
    )
}