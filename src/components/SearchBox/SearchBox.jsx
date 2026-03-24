import InputRow from "./InputRow";
export default function SearchBox() {
  return (
    <div style={{ border: "2px solid white", width : "100%" }}>
      <p style={{ color: "white", border: "2px solid black", width: "100%" }}>
        🔍 Поиск по критериям:
      </p>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <InputRow placeholder="Имя" />
        <InputRow placeholder="Фамилия" />
        <InputRow placeholder="Возраст" />
        <InputRow placeholder="Город" />
        <InputRow placeholder="Город" />
      </div>
    </div>
  );
}