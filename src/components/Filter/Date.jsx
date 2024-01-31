import React,{useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import './Company.css'
import {updateDateAvailability} from "../../redux/action"
import {dateCheckboxData} from "../Contantants/constants"

const Date = () => {

    const [dateDetails, setDateDetails] = useState([]);
    const dispatch= useDispatch()

    const handleChange = (e) => {
        const value = e.target.value
        if(dateDetails.includes(value)){
            const filteredData = dateDetails.filter(item => item !== value)
            setDateDetails(filteredData)
        }
        else
        setDateDetails(p => [...p,value])
    }
    
    useEffect(() => {
            dispatch(updateDateAvailability(dateDetails))
    },[dateDetails])

    return (
        <div className="company-container">
            <div className="company-title">Date</div>
            <div class="company-filter">
                {
                    dateCheckboxData.map((item, index) => {
                        return <div className="input-container">
                            <input 
                            type="checkBox" 
                            className="company-checkbox" 
                            name={item.name} 
                            value={item.value} 
                            checked={dateDetails.includes(item.value)}
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

export default Date;