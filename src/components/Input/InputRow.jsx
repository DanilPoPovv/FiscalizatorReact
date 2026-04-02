import "./InputRow.css"
export default function InputRow({ placeholder, onChange, value, disabled }) {
  return (
    <div className="inputRow">
      <label className="inputRowLabel">{placeholder}</label>
      <input onChange={onChange} className="inputRowInput" value={value} disabled={disabled} />
    </div>
  );
}