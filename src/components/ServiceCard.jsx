import React from "react";

export default function ServiceCard({ title,description, icon }) {

    return (
        <div className="servicecard">
            <div className="serviceicon"> {icon} </div> 
            <h3>{title}</h3>
            <p> {description} </p>
        </div>
    )
}