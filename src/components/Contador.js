import React, {useState, useEffect} from 'react'
import LabelCronometro from './LabelCronometro'
import Botao  from  './Botao'
import LabelParcial  from  './LabelParcial'

const Contador = () => {
    const [segundos, setSegundos] = useState(0)
    const [minutos, setMinutos] = useState(0)
    const [stop, setStop] = useState(true)
    const [nameStop, setNameStop] = useState("Play")
    const [parcial, setParcial] =  useState([])

    
    const incrementarSegundos = () => {   
        if(stop===false){
            setSegundos(segundos + 1)
        }
    }
    const incrementarMinutos = () => {
        setMinutos(minutos + 1)
    }
    const zerarSegundos = () => {
        setSegundos(0)
        setMinutos(0)
    }
    const pararTempo = () => {
        setStop(!stop)//toggle stop
        if(stop){
            setNameStop("Stop")
        }else{
            setNameStop("Play")
        } 
    }
    const parciais = () => {
        let p = min + ":" + seg
        setParcial([...parcial, p])
    }
    const zerarCronometro = () => {
        setSegundos(0)
        setMinutos(0)
        setParcial([])
    }
    
    useEffect(() => {
        let id = setInterval(() => {
            incrementarSegundos()
        }, 1000)

        if (segundos >= 60){
            zerarSegundos()
            incrementarMinutos()
        }
        return () => clearInterval(id) 
    }, [segundos, stop])

    //IFs TERNÁRIOS
    let min = minutos < 10 ? "0"+minutos: minutos;
    let seg = segundos < 10 ? "0"+segundos: segundos; 
    
    return(
        <div>
                <LabelCronometro name={`${min}:${seg}`}/>
                <Botao onClick={() => {zerarCronometro()}} label="Zerar" />
                <Botao onClick={() => {pararTempo()}} label={nameStop} />
                <Botao  onClick={() => {parciais()}}  label="Parcial"  />
                <LabelParcial  items={parcial}/>
            </div>
    )
}
export default Contador
