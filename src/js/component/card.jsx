import React from "react";
import rigoImage from "../../img/rigo-baby.jpg"; // Placeholder image
import { FaEdit, FaTrash } from "react-icons/fa"; // Install react-icons if needed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.min.css';


const Card = ({ id, name, phone, email, address, onDelete, onEdit }) => {
    return (
        <div className="container">
            <div className="card mb-3 p-3 shadow-sm" style={{ maxWidth: "720px" }}>
                <div className="d-flex align-items-center">
                    {/* Profile Image */}
                    <img 
                        src={rigoImage} 
                        className="rounded-circle me-3" 
                        alt={name} 
                        style={{ width: "80px", height: "80px", objectFit: "cover" }}
                    />
                    
                    {/* Contact Details */}
                    <div className="flex-grow-1">
                        <h5 className="mb-1">{name}</h5>
                        <p className="mb-1">
                            <i className="fas fa-map-marker-alt"></i> {address}
                        </p>
                        <p className="mb-1">
                            <i className="fas fa-phone"></i> {phone}
                        </p>
                        <p className="mb-0">
                            <i className="fas fa-envelope"></i> {email}
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="d-flex gap-2">
                        <FaEdit className="text-primary cursor-pointer" style={{ cursor: "pointer" }} onClick={() => onEdit(id)} />
                        <FaTrash className="text-danger cursor-pointer" style={{ cursor: "pointer" }} onClick={() => onDelete(id)} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
