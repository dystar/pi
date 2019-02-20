import React from "react";
import { Link } from "react-router-dom";
function MissionBlock() {
    return(
        <div className="mission_block">
        <h3 className="header">Наша задача:</h3>
        <p><i className="fas fa-wheelchair"></i> формирование доступной среды  для людей с ограниченными возможностями</p>
        <p><i className="fas fa-child"></i> <span>показать красоту детей вне зависимости от <Link to="/articles">диагнозов и медицинских заключений</Link></span></p>
        <p><i className="fas fa-scroll"></i> <span>рассказать <Link to="/heroes">историю семей</Link> и разрушить ложные представления о нас</span></p>
        </div>
    )
}


export default MissionBlock;