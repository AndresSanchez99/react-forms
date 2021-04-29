import React from 'react';
import InformationPage from '../information-table/information-table.comp';
import './table-SCM.style.css';
import Logo from '../img/Logo.png';
const TableSCM = (props) => {
   
    return (
        
        <div className="table-SCM-container">
        <img src={Logo} /> <br/>
           <span className="tittle-table">FORMULARIO PARA INGRESAR SERVICIOS SYSTEM COMPUTER MANIZALES</span> 
            <InformationPage serviceslist= {props.serviceslist}/>
           
        </div>
    );
    
}

export default TableSCM;