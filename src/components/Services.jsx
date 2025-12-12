import React from "react";
import ServiceCard from "./ServiceCard";

export default function Services(){
    return(
        <section id="services" className="services">
            <h2> Our Services  </h2>
            <div className="serviceslist">
                <ServiceCard 
                    title="Zero Web Development" 
                    description="We build responsive and robust websites tailored to your needs."
                    icon= "I" />
                <ServiceCard 
                    title="Zero Mobile App Development"
                    description="Creating user-friendly mobile applications for both Android and iOS platforms."
                    icon= "II" />
                <ServiceCard
                    title="Zero Digital Marketing"
                    description="Boost your online presence with our expert digital marketing strategies."
                    icon= "III" />
            </div>
        </section>
    );
}   