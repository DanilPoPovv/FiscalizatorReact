import InputRow from "./InputRow";

export default function SearchBox() {
  return (
    <div className="searchBox">
      <div className="searchHeader">
        <p className="searchTitle">
          🔍 Поиск по критериям:
        </p>
      </div>

      <div className="searchContent">
        <InputRow placeholder="Имя" />
        <InputRow placeholder="Фамилия" />
        <InputRow placeholder="Возраст" />
        <InputRow placeholder="Город" />
        <InputRow placeholder="Город" />
      </div>
    </div>
  );
}