import { useEffect, useState, useContext } from "react";

import InfoListAndSearch from "../components/InfoList/InfoListWithSearch.jsx";
import Modal from "../components/Modal/Modal.jsx";
import { AlertContext } from "../components/Alerts/AlertContext.jsx";

export function BaseCrudPage({ columns, filtersConfig, entityApi, entityName }) {
  const { showError, showSuccess } = useContext(AlertContext);

  const [entities, setEntities] = useState({});
  const [actionModal, setActionModal] = useState(null);
  const [filters, setFilters] = useState(filtersConfig);

  useEffect(() => {
    loadEntities();
  }, []);

  async function loadEntities() {
    const result = await entityApi.getAll();
    setEntities(result);
  }

  function performAction(actionType, requestData) {
    setActionModal({ actionType, requestData });
  }

  async function handleSearch({ newFilters = {}, page = 1 } = {}) {
    const request = {
      ...filters,
      ...newFilters,
      Page: page
    };

    setFilters(request);

    const result = await entityApi.search(request);
    setEntities(result);
  }

  async function handleConfirm() {
    let result;

    try {
      switch (actionModal.actionType) {
        case "create":
          result = await entityApi.create(actionModal.requestData);
          break;
        case "edit":
          result = await entityApi.update(actionModal.requestData);
          break;
        case "delete":
          result = await entityApi.remove(actionModal.requestData);
          break;
      }
    } catch (ex) {
      showError(ex.message);
      return;
    }

    showSuccess(`${entityName} успешно обработан`);

    setActionModal(null);
    loadEntities(); 
  }

  const requestFields = columns.filter(
    c => !c.isAction && c.formModes?.includes(actionModal?.actionType)
  );

  return (
    <>
      <InfoListAndSearch
        columns={columns}
        data={entities}
        onSearch={handleSearch}
        onAction={performAction}
        createButtonText={`Добавить ${entityName}`}
      />

      {actionModal && (
        <Modal
          onClose={() => setActionModal(null)}
          onSubmit={handleConfirm}
          requestFieldNames={requestFields}
          entity={actionModal.requestData}
          modalType={actionModal.actionType}
        />
      )}
    </>
  );
}