import React, { useEffect, useState } from "react";
import "./Navbar.css"
import { useDispatch, useSelector } from "react-redux";
import { jobrole } from "../../redux/action";

const Navbar = ({ setFilterData }) => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const currentState = useSelector(state => state.data.companyDetails);
    const categoryData = useSelector(state => state.data.categoryFilter);
    const locationData = useSelector(state => state.data.locationFilter);

    useEffect(() => {

        let  dataArray = [...currentState]
    
        if (value) {
            dataArray = dataArray.filter((items, index) => {
                return items.jobTitle.toLowerCase().includes(value.toLowerCase())
            })
        }  
        if(categoryData.length>0) {
            dataArray = dataArray.filter((item) => {
                return categoryData.includes(item.company)
            })
        } 
        if(locationData.length>0){
            dataArray = dataArray.filter((item)=>{
               return  locationData.includes(item.location)
            })
        }      

        setFilterData(dataArray)

    }, [currentState, value, categoryData,locationData])

    let handleChange = (e) => {
        setValue(e.target.value)
    }


    useEffect(() => {
        fetch("https://65b8a3d7b71048505a890e87.mockapi.io/study")
            .then(res => res.json())
            .then(value => dispatch(jobrole(value)))
    }, [])


    return (
        <div className="nav-container">
            <div className="nav-title">Jobs</div>
            <div className="search-container">
                <input type="text" className="search-data" onChange={handleChange} />
                <div className="search-logo" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="129" height="128" viewBox="0 0 176 32" fill="none">
                        <g opacity="0.5">
                            <path d="M160.469 18.8085H159.618L159.316 18.5187C160.609 17.0159 161.277 14.9656 160.911 12.7865C160.404 9.80235 157.904 7.41931 154.888 7.05434C150.33 6.49615 146.494 10.3176 147.055 14.8583C147.421 17.8639 149.813 20.3543 152.808 20.8588C154.995 21.2238 157.053 20.5582 158.562 19.2701L158.853 19.5707V20.4187L163.432 24.9808C163.874 25.4209 164.595 25.4209 165.037 24.9808C165.479 24.5407 165.479 23.8215 165.037 23.3814L160.469 18.8085Z" fill="white" />
                            <path d="M158.641 13.8792C158.641 16.5091 156.509 18.6411 153.879 18.6411C151.249 18.6411 149.117 16.5091 149.117 13.8792C149.117 11.2492 151.249 9.11719 153.879 9.11719C156.509 9.11719 158.641 11.2492 158.641 13.8792Z" fill="#242D40" />
                        </g>
                    </svg>
                </div>
            </div>
            <div className="icon-container">
                <div className="nav-profile">
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 448 512" fill="white"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" /></svg>
                </div>
                <div className="nav-profile">
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="32" viewBox="0 0 29 32" fill="none">
                        <path d="M20.9004 9.55039C20.9004 7.7204 20.1734 5.96535 18.8794 4.67135C17.5854 3.37735 15.8304 2.65039 14.0004 2.65039C12.1704 2.65039 10.4154 3.37735 9.12135 4.67135C7.82735 5.96535 7.10039 7.7204 7.10039 9.55039C7.10039 17.6004 3.65039 19.9004 3.65039 19.9004H24.3504C24.3504 19.9004 20.9004 17.6004 20.9004 9.55039Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15.9897 24.5C15.7876 24.8485 15.4974 25.1378 15.1482 25.339C14.799 25.5401 14.4032 25.6459 14.0002 25.6459C13.5973 25.6459 13.2014 25.5401 12.8523 25.339C12.5031 25.1378 12.2129 24.8485 12.0107 24.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    )

}

export default Navbar;