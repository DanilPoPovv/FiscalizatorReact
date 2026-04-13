export function getSuccessMessage(type, entityName) {
  switch (type) {
    case "create":
      return `${entityName} успешно создан`;
    case "edit":
      return `${entityName} успешно обновлён`;
    case "delete":
      return `${entityName} удалён`;
    default:
      return "Успех";
  }
}