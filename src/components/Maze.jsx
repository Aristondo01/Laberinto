import React,{useRef, useEffect,useState} from "react";
import wall from "../../public/Multimedia/pared.jpg"
import treasure from "../../public/Multimedia/tesoro.png"
import Player from "./Player.jsx"
import celebration from "../../public/Multimedia/celebration.gif"
import idle from "../../public/Multimedia/jonesidle2.gif"
import win from "../../public/Multimedia/win.png"




const Maze = ({caminos,setCaminos,victoria,setVictoria}) => {

  const [caracter, setCaracter]=useState([idle,"",1]) 
  const [out, setOut]=useState(false)

  const fin=(()=>{
    setVictoria(true)
    setTimeout(() => { setOut(true)}, 2500)
  })
  const x =useRef(1)
  const y =useRef(1)
  useEffect(()=>{
    x.current=1
    y.current=1
    setCaracter([idle,"",1]) 
  },[victoria])

  useEffect(()=>{
    if(caminos!=null && !victoria)
    {
      const temp = [...caminos]
      if(caracter[1]==="izquierda" && temp[y.current][x.current-1]===" " || temp[y.current][x.current-1]==="g")
      {
        if(temp[y.current][x.current-1]==="g") fin()
          
        temp[y.current][x.current]=" "
        temp[y.current][x.current-1]="p"
        x.current=x.current-1
        
      }
      if(caracter[1]==="derecha"&& temp[y.current][x.current+1]===" " || temp[y.current][x.current+1]==="g")
      {
        if(temp[y.current][x.current+1]==="g") fin()
          
        temp[y.current][x.current]=" "
        temp[y.current][x.current+1]="p"
        x.current=x.current+1
      }
      if(caracter[1]==="abajo"&& temp[y.current+1][x.current]===" " || temp[y.current+1][x.current]==="g")
      {
        if(temp[y.current+1][x.current]==="g") fin()
          
        temp[y.current][x.current]=" "
        temp[y.current+1][x.current]="p"
        y.current=y.current+1
      }
      if(caracter[1]==="arriba"&& temp[y.current-1][x.current]===" " || temp[y.current-1][x.current]==="g")
      {
        if(temp[y.current-1][x.current]==="g") fin()
          
        temp[y.current][x.current]=" "
        temp[y.current-1][x.current]="p"
        y.current=y.current-1
      }
      setCaminos(temp)
    }
  },[caracter])


    return (
      <>
        {!out ?
        <div>
        <Player setCaracter={setCaracter} victoria={victoria}/>
        {caminos.map((camino,index) =>{
          return(
            <div key={index} css={{
              display:"flex",
              flexDirection:"row"
            }}>
            {camino.map((pared,index2)=>{
              if(pared==='p')
              {
                return ( <div key={index+""+index2} css={{backgroundImage: !victoria ? `url(${caracter[0]})` : `url(${celebration})`,height:"30px",width:"30px",backgroundSize:"contain",backgroundRepeat:"no-repeat",}}/>)

              }else if(pared==='g')
              {
                return(<div key={index+""+index2} css={{backgroundImage:`url(${treasure})`,height:"30px",width:"30px",backgroundSize:"contain",}}/>)
              }
              else if(pared==="+" || pared==="|" || pared==="-")
              {
                return(<div key={index+""+index2} css={{backgroundImage:`url(${wall})`,height:"30px",width:"30px",backgroundSize:"contain",}}/>)
              }
              else
              {
                return(<div key={index+""+index2} css={{height:"30px",width:"30px"}}/>)
              }
            })}

            </div>

        )
        })}
        </div>
        :
        <div css={{backgroundRepeat:"no-repeat",backgroundImage:`url(${win})`,height:"300px",width:"300px",backgroundSize:"contain"}}/>}
      </>
    )
}
export default Maze