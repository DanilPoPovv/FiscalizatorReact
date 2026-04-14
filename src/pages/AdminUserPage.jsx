import { createColumn } from "../services/columnFactory.js";
import { BaseCrudPage } from "./BaseCrudPage.jsx";

import {
  getUsers,
  searchUsersWithFilters,
  createUser,
  updateUser,
  deleteUser
} from "../services/adminUserService.js";

export default function UserListPage() {
  const columns = [
    createColumn("Имя", "Name", {
      isSearchCriteria: true,
      formModes: ["create", "edit", "delete"]
    }),
    createColumn("Email", "Email", {
      isSearchCriteria: true,
      formModes: ["create", "edit", "delete"]
    }),
    createColumn("Пароль", "Password", {
      visible: false,
      formModes: ["create", "edit"]
    }),
    createColumn("Новый пароль", "NewPassword", {
      visible: false,
      formModes: ["edit"]
    }),
    createColumn("Действие", "__action", { isAction: true })
  ];

  const filtersConfig = {
    Name: "",
    Email: "",
    Page: 1,
    PageSize: 10
  };

  const userApi = {
    getAll: getUsers,
    search: searchUsersWithFilters,
    create: createUser,
    update: updateUser,
    remove: deleteUser
  };

  return (
    <BaseCrudPage
      entityName="Пользователь"
      columns={columns}
      filtersConfig={filtersConfig}
      entityApi={userApi}
    />
  );
}