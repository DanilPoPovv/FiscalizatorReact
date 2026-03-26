export default function InputRow({ placeholder, onChange }) {
  return (
    <div className="inputRow">
      <label className="inputRowLabel">{placeholder}</label>
      <input onChange={(e) => onChange(e.target.value)} className="inputRowInput"/>
    </div>
  );
}