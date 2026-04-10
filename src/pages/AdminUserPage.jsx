import { useEffect, useState } from "react";
import InfoListAndSearch from "../components/InfoList/InfoListWithSearch.jsx";
import Modal from "../components/Modal/Modal.jsx";
import { getUsers,searchUsersWithFilters, createUser,
  updateUser,deleteUser } 
  from "../services/adminUserService.js"
import { createColumn } from "../services/columnFactory.js"
const baseHeaders = {
  "Content-Type": "application/json",
  "Authorization": "Bearer " + localStorage.getItem("token")
};

export default function UserListPage() {
  const [users, setUsers] = useState({});
  const [userModal, setUserModal] = useState(null);
  const [filters, setFilters] = useState({
    Name: "",
    Email: "",
    Page: 1,
    PageSize: 10
  });
  
  const columns = [
    createColumn("Имя", "Name", {isSearchCriteria: true }),
    createColumn("Email", "Email", { isSearchCriteria: true }),
    createColumn("Пароль", "Password", { visible: false }),
    createColumn("Новый пароль", "NewPassword", { visible : false }),
    createColumn("Действие", "__action", { isAction: true }),
    ];
  console.log(columns);
  const visibleColumns = columns.filter(c => c.visible);
  const requestFields = columns.filter(c => !c.isAction);
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
          fieldNames={requestFields}
          entity={userModal.requestData}
          modalType={userModal.actionType}
        />
      )}
    </div>
  );
}