import React, {useEffect, useState} from 'react';

const Personajes = () => {

    //estados iniciales
    const[personaje, setPersonaje] =useState([])
    //cambio de estado segun respuesta en Json
    useEffect(() => {
         fetch('https://rickandmortyapi.com/api/character')
            .then(respuesta => respuesta.json())
            //.then(datos => console.log(datos.results))
            .then(datos => setPersonaje(datos.results))
    }, [] )

    return (
        <div className="container">
            <div className="personajes">
                {
                    personaje.map(item => (
                        <div className="box" key={item.id}>
                           <img src={item.image} alt={item.name}/>
                            <div className = "personaje">
                                <h3 className ="nombre">  {item.name}</h3>
                                <p className  ="especie"> {item.species}</p>
                                <p className  ="estado">  {item.status}</p>
                                <p className  ="genero">  {item.gender}</p>
                                <p className  ="ubicacion">{item.location.name}</p>
                           </div>
                        </div>
                    ))
                }
            </div>
        </div>
       );
}

export default Personajes;