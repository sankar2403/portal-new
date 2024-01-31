import React from "react";
import "./Sidebar.css"
import Company from "../Filter/Company";
import Location from "../Filter/Location";
import Date from "../Filter/Date";
import Salary from "../Filter/Salary";

const Sidebar = () => {

    return (
        <div className="sidebar-container">
            <aside className="aside-container">
                <div className="filter-container">
                    <div className="filter-title">Filter by</div>
                    <div className="filters-applied">
                        <div className="filter-count">3 filters applied.</div>
                        <div className="filter-clear">clear all</div>
                    </div>
                </div>
                <div>
                    <Company />
                </div>
                <div>
                    <Location />
                </div>
                <div>
                    <Date />
                </div>
                <div>
                    <Salary />
                </div>
            </aside>
        </div>
    )

}

export default Sidebar;