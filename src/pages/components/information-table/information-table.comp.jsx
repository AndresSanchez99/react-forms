import React, { useState } from 'react';
import './information-table.style.css';

import SearchBar from '../search-bar/search-bar.comp';
import ServicePage from '../services/services.comp';
import Clients from '../clients/clients.comp';
import Categories from '../categories/categories.comp';


const InformationPage = (props) => {

    const [name, setname]= useState('');
    const [service,setservice] = useState('');
    const [document,setdocument] = useState(0);
    const [done,setdone] = useState('');

    const addService = (event) => {
        event.preventDefault();
        console.log('service: '+ service);
        console.log('name: '+ name);
        console.log('document: '+ document);
        console.log('done: '+ done);
    
    }

    return (
        <div className="information-table-container">
        <table className="style-table">
        
        <td className="rowone" >
                <form>
                    INGRESO SERVICIOS
                     <tr>
                        <td>Elige un servicio </td>
                    </tr>
                    <tr>
                        <td>
                            <select value={service} 
                        onChange={(event)=> {
                             setservice(event.target.value); }}>
                                <option value=" "> Elige una opción</option>                                 
                                <option value="S1"> Formateo de PC </option>
                                <option value="S2"> Instalación de juegos PC </option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Nombre cliente</td>
                    </tr>
                    <tr>
                        <td><input type="text"
                        value={name} 
                        onChange={(event)=> {
                             setname(event.target.value);
                        }}/></td>
                    </tr>
                    <tr>
                        <td>Número documento </td>
                    </tr>
                    <tr>
                        <td> 
                            <input type="number" 
                             value={document} 
                             onChange={(event)=> {
                             setdocument(event.target.value); }}/>
                       </td>
                    </tr>
                    <tr>
                        <td>Servicio realizado </td>
                    </tr>
                    <tr>
                     <td> 
                     <select value={done} 
                        onChange={(event)=> {
                             setdone(event.target.value); }}>
                                 <option value=" "> Elige una opción </option>
                                <option value="SI"> SI </option>
                                <option value="NO"> NO </option>
                            </select>
                          </td>   
                     </tr>
                     <tr>
                        <td> <button
                        onClick= {
                            addService}>Registrar </button> </td>
                    </tr>
                </form>
                </td>
            <td className="rowtwo">
          LISTA SERVICIOS 
          <SearchBar/>
          {props.serviceslist.map((service,index)=>{
              return (
                  
                 <React.Fragment key = {service.id} >
                 <ServicePage servicename={service.name} /> 
                 <Categories/>
                 {service.clients.map((client,indexClient)=> {
                     return (
                         <Clients key = {client.id }
                          client ={client} />
                     );
                 })}
                 </React.Fragment> 
            
              );

          })}
           
           
           
       
        </td>
        </table>
        </div>
    );
    
}

export default InformationPage;