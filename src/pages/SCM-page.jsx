import React from 'react';
import TableSCM from './components/table-SCM/table-SCM.comp';

const SCMPage = () => {
     
    let serviceslist = [
     
           {
        id: "S1",
        name: "Formateo de Pc",
        clients : [
            {
                id: "S1C1",
                name: "Julian Sanchez",
                document: "1053870573",
                done: "NO"
            },
            {
                id: "S1C2",
                name: "Maira Villada",
                document: "1053869576",
                done: "NO"
            },
            {
                id: "S1C3",
                name: "Camilo  Torres",
                document: "1053870458",
                done: "NO"
            },
            {
                id: "S1C4",
                name: "Carlos Sanchez",
                document: "1053870576",
                done: "NO"
            }
        ]
       },
       
       { 
        id: "S2",
        name: "Instalación juegos pc",
        clients : [
            {
                id: "S2C1",
                name: "Hector Sanchez",
                document: "1053870573",
                done: "SI"
            },
            {
                id: "S2C2",
                name: "Julian Fer Cano",
                document: "1053870577",
                done: "SI"
            },
            {
                id: "S2C3",
                name: "Julio H Sanchez",
                document: "1053870578",
                done: "SI"
            },
            {
                id: "S2C4",
                name: "Alex Fr Sanchez",
                document: "1053870574",
                done: "SI"
            }
        ]
       },
       { 
        id: "S3",
        name: "Diagnostico de Hardware y Software",
        clients : [
            {
                id: "S3C1",
                name: "Carlos D Castro",
                document: "1053870574",
                done: "SI"
            },
            {
                id: "S3C2",
                name: "Elias Mto Cano",
                document: "7506532478",
                done: "NO"
            },
            {
                id: "S3C3",
                name: "Rosalba Villada",
                document: "1053870578",
                done: "SI"
            },
            {
                id: "S3C4",
                name: "Laura Jimenez",
                document: "1053870574",
                done: "SI"
            }
        ]
       }, 
       { 
        id: "S4",
        name: "Mantenimiento preventivo y correctivo",
        clients : [
            {
                id: "S4C1",
                name: "Consuelo M Cano",
                document: "30327958",
                done: "SI"
            },
            {
                id: "S4C2",
                name: "Adriana Ocampo",
                document: "30352152",
                done: "NO"
            },
            {
                id: "S4C3",
                name: "Albert Sanchez",
                document: "1053870578",
                done: "NO"
            },
            {
                id: "S4C4",
                name: "Carlos M Marin",
                document: "1053870456",
                done: "SI"
            }
        ]
       },         
         

        ];

    return (
        <TableSCM serviceslist={serviceslist}/>
    );
    
}

export default SCMPage;