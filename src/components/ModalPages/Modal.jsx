import InputRow from "../InfoList/SearchBox/InputRow";
import "./Modal.css";

export default function Modal({ onClose, onSubmit, fieldNames }) {
  return (
    <div className="modalOverlay">
     <div className="modalContent">
        <div className="modalFooter">
            <button style={{width : "30px", height : "30px"}} className="modalButton" onClick={onClose}>X</button>
        </div>
  
  {fieldNames.map((field) => (
    <InputRow key={field.name} placeholder={field.label} />
  ))}

  <div className="modalFooter">
    <button style={{width : "85px", height : "30px"}} className="modalButton" onClick={onSubmit}>Submit</button>
  </div>
</div>
    </div>
  );
}