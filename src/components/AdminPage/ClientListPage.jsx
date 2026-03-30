import { useEffect, useState } from "react";
import InfoListAndSearch from "../InfoList/InfoListWithSearch";
import Modal from "../ModalPages/Modal";
import {
    getClients,
    createClient,
    editClient,
    deleteClient
} from "../../services/clientService.js";
export default function ClientListPage(){
    const [data, setData] = useState([]);
    const [filters, setFilters] = useState({});
    const [modal, setModal] = useState(null);

    const dataNames =[
        { label: "Имя", field: "Code" },
        { label: "Email", field: "Name" },
        { label: "Адреc", field: "Address" },
        ]
    useEffect(() => {
        loadClients();
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
    async function loadClients(){
        let result = await getClients();
        setData(result);
    }
    async function handleSearch(newFilters){
        setFilters(newFilters);
        try{
        const res = await fetch("/api/1234", {
            method : "POST",
            headers: baseHeaders,
            body : JSON.stringify(newFilters)
        })
        }
        catch(ex){
            console.log("Error occured", ex.message)
        }
        const result = await res.json();

        setData(result);
    }
async function handleConfirm() {
    let result;

    switch (modal.actionType) {
        case "edit":
            result = await editClient(modal.data);
            break;
        case "create":
            result = await createClient(modal.data);
            break;
        case "delete":
            result = await deleteClient(modal.data);
            break;
    }

    setData(result);
    setModal(null);
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
            <Modal onClose={() => setModal(null)} onSubmit={handleConfirm} onChange={(updatedData) => setModal((prev) => ({...prev, data: updatedData}))} fieldNames={dataNames} item={modal.data}/>
        )}
    </div>
    )
}