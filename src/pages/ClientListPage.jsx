import { useEffect, useState, useContext } from "react";
import InfoListAndSearch from "../components/InfoList/InfoListWithSearch.jsx";
import Modal from "../components/Modal/Modal.jsx";

import {
  getClients,
  searchClientsWithFilters,
  createClient,
  editClient,
  deleteClient
} from "../services/clientService.js";

import { createColumn } from "../services/columnFactory.js";
import { AlertContext } from "../components/Alerts/AlertContext.jsx";
import { getSuccessMessage } from "../services/textHelper.js";

export default function ClientListPage() {
  const { showError, showSuccess } = useContext(AlertContext);

  const [clients, setClients] = useState({});
  const [clientModal, setClientModal] = useState(null);

  const [filters, setFilters] = useState({
    ClientCode: "",
    Name: "",
    Address: "",
    Page: 1,
    PageSize: 10
  });
  function handleModalChange(updatedData) {
  setClientModal(prev => ({
    ...prev,
    requestData: {
      ...prev.requestData,
      ...updatedData
    }
  }));
}
  const columns = [
    createColumn("ИНН", "ClientCode", {
      isSearchCriteria: true,
      formModes: ["create", "edit", "delete"]
    }),
    createColumn("Наименование", "Name", {
      isSearchCriteria: true,
      formModes: ["create", "edit", "delete"]
    }),
    createColumn("Адрес", "Address", {
      isSearchCriteria: true,
      formModes: ["create", "edit", "delete"]
    }),
    createColumn("Действие", "__action", { isAction: true })
  ];

  const requestFields = columns.filter(
    c => !c.isAction && c.formModes?.includes(clientModal?.actionType)
  );

  useEffect(() => {
    loadClients();
  }, []);

  function performAction(actionType, requestData) {
    setClientModal({ actionType, requestData });
  }

  async function loadClients() {
    const result = await getClients();
    setClients(result);
  }

  function updateClientList(updatedClient, actionType) {
    setClients(prev => {
      switch (actionType) {
        case "edit":
          return {
            ...prev,
            Items: prev.Items.map(item =>
              item.Id === updatedClient.Id ? updatedClient : item
            )
          };

        case "create":
          return {
            ...prev,
            Items: [updatedClient, ...prev.Items],
            TotalCount: prev.TotalCount + 1
          };

        case "delete":
          return {
            ...prev,
            Items: prev.Items.filter(
              item => item.Id !== clientModal.requestData.Id
            ),
            TotalCount: prev.TotalCount - 1
          };

        default:
          return prev;
      }
    });
  }

  async function handleSearch({ newFilters = {}, page = 1 } = {}) {
    const request = {
      ...filters,
      ...newFilters,
      Page: page
    };

    setFilters(request);

    const result = await searchClientsWithFilters(request);
    setClients(result);
  }

  async function handleConfirm() {
    let result;

    try {
      switch (clientModal.actionType) {
        case "create":
          result = await createClient(clientModal.requestData);
          break;

        case "edit":
          result = await editClient(clientModal.requestData);
          break;

        case "delete":
          result = await deleteClient(clientModal.requestData);
          break;
      }
    } catch (ex) {
      showError(ex.message);
      return;
    }

    showSuccess(
      getSuccessMessage(clientModal.actionType, "Клиент")
    );

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
        <Modal
          onClose={() => setClientModal(null)}
          onSubmit={handleConfirm}
          onChange={handleModalChange}
          requestFieldNames={requestFields}
          entity={clientModal.requestData}
          modalType={clientModal.actionType}
        />
      )}
    </div>
  );
}