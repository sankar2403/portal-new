import React ,{useState,useEffect}from "react";
import "./Company.css"
import {salaryCheckboxData} from "../Contantants/constants"
import { updateSalaryAvailability } from "../../redux/action";
import { useDispatch } from "react-redux";

const Salary = ()=>{
    const [salaryDetails, setSalaryDetails] = useState([]);
    const dispatch= useDispatch()
    

    const handleChange = (e) => {
        const value = e.target.value
        if(salaryDetails.includes(value)){
            const filteredData = salaryDetails.filter(item => item !== value)
            setSalaryDetails(filteredData)
        }
        else
        setSalaryDetails(p => [...p,value])
    }
    
    useEffect(() => {      
            dispatch(updateSalaryAvailability(salaryDetails))
    },[salaryDetails])

    return (
        <div className="company-container">
            <div className="company-title">Salary</div>
            <div class="company-filter">
                {
                    salaryCheckboxData.map((item, index) => {
                        return <div className="input-container">
                            <input 
                            type="checkBox" 
                            className="company-checkbox" 
                            name={item.name} 
                            value={item.value} 
                            checked={salaryDetails.includes(item.value)}
                            onClick={(e) => handleChange(e)}
                            />
                            <label className="company-label">{item.name}</label>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Salary;