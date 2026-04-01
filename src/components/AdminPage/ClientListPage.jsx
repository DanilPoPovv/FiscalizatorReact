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
    const [clients, setClients] = useState([]);
    const [filters, setFilters] = useState({});
    const [clientModal, setClientModal] = useState(null);

    const dataNames =[
        { label: "Инн", field: "ClientCode" },
        { label: "Наименование", field: "Name" },
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
        setClientModal({
            actionType : actionType,
            requestData : requestData,
        });
    }
    async function loadClients(){
        let result = await getClients();
        setClients(result);
        console.log(clients)
    }

    async function updateUserList(updatedUser, actionType) {
        switch (actionType){
        case "edit":
            setClients(prev =>
                prev.map(item =>
                    item.Id === updatedUser.Id ? updatedUser : item
                )
            );
            break;
        case "create":
            setClients(prev => [...prev, updatedUser]);
            break;
        case "delete":
            setClients(prev =>
                prev.filter(item => item.Id !== clientModal.requestData.Id)
            );
            break;
    }
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

        setClients(result);
    }
async function handleConfirm() {
    let result;
    switch (clientModal.actionType) {
        case "edit":
            result = await editClient(clientModal.requestData);
            break;
        case "create":
            result = await createClient(clientModal.requestData);
            break;
        case "delete":
            await deleteClient(clientModal.requestData);
            break;
    }

    updateUserList(result, clientModal.actionType);
    setClientModal(null);
}
    
    return (
        <div>
        <InfoListAndSearch
        headers={["ИНН", "Наименование", "Адрес", "Действие"]}
        criteriaList={dataNames}
        data={clients}
        onSearch={handleSearch}
        onAction={performAction}
        />
        {clientModal && (
            <Modal onClose={() => setClientModal(null)} 
            onSubmit={handleConfirm} 
              onChange={(updatedData) =>
    setClientModal((prev) => ({
      ...prev,
      requestData: { ...prev.requestData, ...updatedData },
    }))
  }
            fieldNames={dataNames} 
            item={clientModal.requestData}
            modalType={clientModal.actionType}
            />
        )}
    </div>
    )
}