import React from "react";
import headerImg from '../../assets/home/home_header_img.png'


export function HomeHeader(){
    return (
        <div className="home-header-bg px-lg-5 px-4 py-lg-0 py-5">
            <div className="">
                <div className="d-flex jusfify-content-between flex-wrap align-items-center">
                    <div className="col-lg-6">
                        <div className="mb-3">
                            <h1 className="m-0 p-0 home-header-header-text mb-3">
                                Your Health Is Our Priority...                        
                            </h1>
                            <h3 className="m-0 p-0 home-header-sub-header mb-2">
                                Service, Integrity, Empathy, Innovation 
                            </h3>
                            <p className="m-0 p-0 home-header-text">
                                We are dedicated to providing world-class healthcare services to our community. 
                                With a legacy of excellence and a commitment to your well-being, we invite you 
                                to discover the difference of healthcare done right.                        
                            </p>                            
                        </div>
                        <div className="d-flex flex-wrap align-items-center">
                            <div className="mb-lg-0 mb-3">
                                <button className="p-0 m-0">
                                    <div 
                                        className="cont_1 p-0 m-0"
                                        style={{
                                            backgroundColor: '#000FB0',
                                            borderRadius: "20px"
                                        }}
                                    >
                                        <div className="cont_2 p-0 m-0"
                                        >
                                            <p 
                                                className="cont_3 px-4 py-2 text-white"
                                                style={{
                                                    border: "none",
                                                    borderRadius: "20px"
                                                }}
                                            >
                                                Make an Appointment
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>                                                
                                            </p>
                                        </div>
                                    </div>                                    
                                </button>
                            </div>
                            <div>
                                <button className="p-0 m-0 mx-lg-4">
                                    <div className="cont_1 rounded-3 p-0 m-0">
                                        <div className="cont_2 p-0 m-0">
                                            <p className="cont_3 px-4 py-2">
                                                Learn More
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>                                                
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div>
                            <img className="col-lg-11 col-12" src={headerImg} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}