import React from "react";
import { Template } from "../../../utils/types";
import { Link } from "react-router-dom";
import './TemplateCard.css';

interface TemplateCardProps {
    template: Template;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template }) => {
    return (
        <Link className="main_card" to={`/template/${template?.template_name}`} state={{ template }}>

            <div className="card_imgbx">
                <div className="overlay"></div>
                <img className="card_img" src={template?.main_image} alt={template?.main_image} />
            </div>
            <div className="card_description">
                <h2>{template?.template_name}</h2>
                <p>{template?.stacks.join(", ")}</p>
                <p>{template?.description}</p>
            </div>
        </Link>
    );
};

export default TemplateCard;
