import React, { useState, useEffect } from "react"


const Trafficlight = () => {

    const [active, setActive] = useState("verde")
    const [cambio, setCambio]= useState(false)
    
    const encendido= (color) =>{
        setActive(color);
        
    }

    useEffect(()=>{
        if(cambio){
            const interval = setInterval(()=>{
                if (active == "rojo"){
                    setActive("amarillo")
                }else if(active == "amarillo"){
                    setActive("verde")
                }else if (active == "verde"){
                    setActive ("rojo")
                }
                   

            },1000)
            return () => clearInterval(interval)
        }
    }, [active,cambio])

    



    return (
        <main>


            <div className="semaforo">
                <div 
                className={`rojo ${active === "rojo" ? "lightOn" : ""}`}
                onClick={() =>encendido("rojo")}
                ></div>
                <div 
                className={`amarillo ${active === "amarillo" ? "lightOn" : ""}`}
                onClick={() =>encendido("amarillo")}
                ></div>
                <div 
                className={`verde ${active === "verde" ? "lightOn" : ""}`}
                onClick={() =>encendido("verde")}

                ></div>
            </div>
            <button onClick={()=>setCambio(!cambio)} className="btn btn-success">activar</button>


        </main>

    )
}

export default Trafficlight