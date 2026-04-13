import { useEffect, useState, useContext } from "react";
import InfoListAndSearch from "../components/InfoList/InfoListWithSearch.jsx";
import Modal from "../components/Modal/Modal.jsx";
import { getUsers,searchUsersWithFilters, createUser,
  updateUser,deleteUser } 
  from "../services/adminUserService.js"
import { createColumn } from "../services/columnFactory.js"
import {AlertContext} from "../components/Alerts/AlertContext.jsx"
import {getSuccessMessage} from "../services/textHelper.js"
export default function UserListPage() {
  const {showError, showSuccess} = useContext(AlertContext);
  const [users, setUsers] = useState({});
  const [userModal, setUserModal] = useState(null);
  const [filters, setFilters] = useState({
    Name: "",
    Email: "",
    Page: 1,
    PageSize: 10
  });
  
  const columns = [
    createColumn("Имя", "Name", {isSearchCriteria: true , formModes : ["create", "edit", "delete"]}),
    createColumn("Email", "Email", { isSearchCriteria: true, formModes : ["create", "edit", "delete"] }),
    createColumn("Пароль", "Password", { visible: false , formModes : ["create", "edit"] }),
    createColumn("Новый пароль", "NewPassword", { visible : false, formModes : ["edit"] }),
    createColumn("Действие", "__action", { isAction: true }),
    ];
  const requestFields = columns.filter(c =>
  !c.isAction &&
  c.formModes?.includes(userModal?.actionType)
);
  useEffect(() => {
    loadUsers();
  }, []);

  function performAction(actionType, requestData) {
    setUserModal({
      actionType,
      requestData
    });
  }

  async function loadUsers() {
    const result = await getUsers();
    setUsers(result);
  }

  function updateUserList(updatedUser, actionType) {
    setUsers(prev => {
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
              item.Id !== userModal.requestData.Id
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

    const result = await searchUsersWithFilters(request);

    setUsers(result);
  }

  async function handleConfirm() {
    let result;
    try {
    switch (userModal.actionType) {
      case "create":
        result = await createUser(userModal.requestData);
        break;
      case "edit":
        result = await updateUser(userModal.requestData);
        break;
      case "delete":
        result = await deleteUser(userModal.requestData);
        break;
    }
  }
  catch(ex){
    showError(ex.message);
    return;
  }
    showSuccess(getSuccessMessage(userModal.actionType, `Пользователь`));
    updateUserList(result, userModal.actionType);
    setUserModal(null);
  }

  return (
    <div>
      <InfoListAndSearch
        columns={columns}
        data={users}
        onSearch={handleSearch}
        onAction={performAction}
        createButtonText={"Добавить пользователя"}
      />

      {userModal && (
        <Modal
          onClose={() => setUserModal(null)}
          onSubmit={handleConfirm}
          onChange={(updatedData) =>
            setUserModal(prev => ({
              ...prev,
              requestData: {
                ...prev.requestData,
                ...updatedData
              }
            }))
          }
          requestFieldNames={requestFields}
          entity={userModal.requestData}
          modalType={userModal.actionType}
        />
      )}
    </div>
  );
}