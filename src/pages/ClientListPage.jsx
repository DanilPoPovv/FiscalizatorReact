import { useEffect, useState } from "react";
import InfoListAndSearch from "../components/InfoList/InfoListWithSearch.jsx";
import Modal from "../components/Modal/Modal.jsx";
import {
    getClients,
    createClient,
    editClient,
    deleteClient
} from "../services/clientService.js";
import { createColumn } from "../services/columnFactory.js"
export default function ClientListPage(){
    const [clients, setClients] = useState({});
    const [clientModal, setClientModal] = useState(null);
    const [filters, setFilters] = useState(
        {
        ClientCode : "",
        Name : "",
        Address : "",
        Page : 1,
        PageSize : 10
        });
        
    const columns = [
        createColumn("ИНН","ClientCode", {visible : true, isSearchCriteria : true, formModes : ["create", "edit", "delete"]}),
        createColumn("Наименование","Name", {visible : true, isSearchCriteria : true, formModes : ["create", "edit", "delete"]}),
        createColumn("Адрес","Address", {visible : true, isSearchCriteria : true, formModes : ["create", "edit", "delete"]}),
        createColumn("Действие","__action", {isAction : true}),
    ];
    const requestFields = columns.filter(c =>
  !c.isAction &&
  c.formModes?.includes(clientModal?.actionType)
);
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
    }

   async function updateClientList(updatedUser, actionType) {
    setClients(prev => {
        switch (actionType) {
            case "edit":
                return {
                    ...prev,
                    Items: prev.Items.map(item =>
                        item.Id === updatedUser.Id ? updatedUser : item
                    )
                };

            case "create":
                return {
                    ...prev,
                    Items: [updatedUser, ...prev.Items],
                    TotalCount: prev.TotalCount + 1
                };

            case "delete":
                return {
                    ...prev,
                    Items: prev.Items.filter(item =>
                        item.Id !== clientModal.requestData.Id
                    ),
                    TotalCount: prev.TotalCount - 1
                };

            default:
                return prev;
        }
    });
}
async function handleSearch({newFilters= {}, page = 1 } = {}){
    
    console.log(page)
        const request = {
        ...filters,
        ...newFilters,
        Page: page
    };
    setFilters(request);
    console.log(request);
    let res, result;
    try {
        res = await fetch("http://localhost:5068/Client/Search", {
            method: "POST",
            headers: baseHeaders,
            body: JSON.stringify(request)
        });
        result = await res.json();
    } catch(ex){
        console.log("Error occured", ex.message);
        return; 
    }

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

    updateClientList(result, clientModal.actionType);
    setClientModal(null);
}
    
    return (
        <div>
        <InfoListAndSearch
        columns={columns}
        data={clients}
        onSearch={handleSearch}
        onAction={performAction}
        createButtonText={"Добавить клиента"}
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
            requestFieldNames={requestFields} 
            entity={clientModal.requestData}
            modalType={clientModal.actionType}
            />
        )}
    </div>
    )
}