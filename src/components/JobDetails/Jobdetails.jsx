import React from "react";
import "./Jobdetails.css"
import JobDiscriptions from "../JobDiscriptions/JobDiscriptions";



const Jobdetails = ({filterData}) => {

    return (
        <div className="job-container">
            <div className="job-titles-container">
                <div className="job-titles">SEARCH RESULTS/<span className="job-counts">JOBS-2047results</span></div>
                <div className="sortby">
                    <div className="job-sortby">sortby</div>
                    <select className="select">
                        <option>Latest</option>
                    </select>
                </div>
            </div>
            <div className="job-details-container">
                <div className="job-details">
                    <div className="job-details-title">JOBS</div>
                </div>
                <div className="job-discriptions-details">
                    <JobDiscriptions  filterData={filterData}/>
                </div>
            </div>

        </div>
    )
}

export default Jobdetails