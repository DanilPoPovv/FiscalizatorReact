import { createColumn } from "../services/columnFactory.js";
import { BaseCrudPage } from "./BaseCrudPage.jsx";

import {
  getClients,
  searchClientsWithFilters,
  createClient,
  editClient,
  deleteClient
} from "../services/clientService.js";

export default function ClientListPage() {
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

  const filtersConfig = {
    ClientCode: "",
    Name: "",
    Address: "",
    Page: 1,
    PageSize: 10
  };

  const clientApi = {
    getAll: getClients,
    search: searchClientsWithFilters,
    create: createClient,
    update: editClient,
    remove: deleteClient
  };

  return (
    <BaseCrudPage
      entityName="Клиент"
      columns={columns}
      filtersConfig={filtersConfig}
      entityApi={clientApi}
    />
  );
}