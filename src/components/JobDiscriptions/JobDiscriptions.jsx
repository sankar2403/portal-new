import React from "react";
import './Jobdiscriptions.css'

const JobDiscriptions = ({ filterData }) => {
    

    return (
        <div className="job-descriptions">
            {
                filterData?.map((items, index) => {
                    return <div key={index} className="job-description-container">
                        <div className="title-container">
                            <div className="title-discriptions">
                                <div className="logo">Logo</div>
                                <div className=" role-details">
                                    <div className="title">{items.jobTitle}</div>
                                    <div className="title-company">{items.company}<br />{items.location}</div>

                                </div>
                            </div>
                            <div className="skill-container">
                                <div className="skill-title">skill match</div>
                                <div className="skill-percentage">78%</div>
                            </div>
                        </div>
                        <div className="job-applicants-container">
                            <div className="job-posted-container">
                                <div className="job-applicants">{items.posted}</div>
                                <div className="job-applicants">{items.applicantsApplied}</div>
                            </div>
                            <div className="button-container">
                                <button className="apply-button">Apply Now</button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="30" viewBox="0 0 22 30" fill="none">
                                    <path opacity="0.4" d="M21 29L11 21.2222L1 29V4.11111C1 3.28599 1.30102 2.49467 1.83684 1.91122C2.37266 1.32778 3.09938 1 3.85714 1H18.1429C18.9006 1 19.6273 1.32778 20.1632 1.91122C20.699 2.49467 21 3.28599 21 4.11111V29Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                })
            }

        </div>
    )

}

export default JobDiscriptions