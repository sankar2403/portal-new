import React,{useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import './Company.css'
import {updateCompanyAvailability} from "../../redux/action"
import {companyCheckboxData} from "../Contantants/constants"

const Company = () => {

    const [companyDetails, setCompanyDetails] = useState([]);
    const dispatch= useDispatch()

    const handleChange = (e) => {
        const value = e.target.value
        if(companyDetails.includes(value)){
            const filteredData = companyDetails.filter(item => item !== value)
            setCompanyDetails(filteredData)
        }
        else
        setCompanyDetails(p => [...p,value])
    }
    
    useEffect(() => {
            dispatch(updateCompanyAvailability(companyDetails))
    },[companyDetails])

    return (
        <div className="company-container">
            <div className="company-title">Company</div>
            <div class="company-filter">
                {
                    companyCheckboxData.map((item, index) => {
                        return <div className="input-container">
                            <input 
                            type="checkBox" 
                            className="company-checkbox" 
                            name={item.name} 
                            value={item.value} 
                            checked={companyDetails.includes(item.value)}
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

export default Company