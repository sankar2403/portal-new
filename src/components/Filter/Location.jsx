import React ,{useState,useEffect}from "react";
import "./Company.css"
import {locationCheckboxData} from "../Contantants/constants"
import { updateLocationAvailability } from "../../redux/action";
import { useDispatch } from "react-redux";

const Location = ()=>{
    const [locationDetails, setLocationDetails] = useState([]);
    const dispatch= useDispatch()
    

    const handleChange = (e) => {
        const value = e.target.value
        if(locationDetails.includes(value)){
            const filteredData = locationDetails.filter(item => item !== value)
            setLocationDetails(filteredData)
        }
        else
        setLocationDetails(p => [...p,value])
    }
    
    useEffect(() => {   
            dispatch(updateLocationAvailability(locationDetails))
    },[locationDetails])

    return (
        <div className="company-container">
            <div className="company-title">Location</div>
            <div class="company-filter">
                {
                    locationCheckboxData.map((item, index) => {
                        return <div className="input-container">
                            <input 
                            type="checkBox" 
                            className="company-checkbox" 
                            name={item.name} 
                            value={item.value} 
                            checked={locationDetails.includes(item.value)}
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

export default Location;