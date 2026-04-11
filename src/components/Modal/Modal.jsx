import InputRow from "../Input/InputRow";
import "./Modal.css";
import { useState, useEffect} from "react";

export default function Modal({ onClose, onSubmit, onChange, requestFieldNames, entity, modalType}) {
  const initialValues = {};
  requestFieldNames.forEach(f => {
      initialValues[f.field] = entity?.[f.field] ?? "";
  });
const [values, setValues] = useState(initialValues);

const isReadOnly = modalType === "delete";

const handleChange = (name, value) => {
  const newValues = {...values, [name]: value};
  setValues(newValues);
  onChange(newValues);
};
  const handleSubmit = () => {
    onSubmit(values); 
  };
  return (
    <div className="modalOverlay">
     <div className="modalContent">
        <div className="modalFooter">
            <button style={{width : "30px", height : "30px"}} className="modalButton" onClick={onClose}>X</button>
        </div>
  
  {requestFieldNames.map((field, index) => (
    <InputRow key={index} placeholder={field.label} onChange={(e) => handleChange(field.field, e.target.value)} 
    disabled={isReadOnly} value={values[field.field]}/>
  ))}
  <div className="modalFooter">
    <button type="button" style={{width : "85px", height : "30px"}} className="modalButton" onClick={handleSubmit}>Submit</button>
  </div>
</div>
    </div>
  );
}