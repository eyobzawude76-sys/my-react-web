import React from 'react';
import './Projects.css'
function Eyob({value,onsquarClick})
{const color=value==="x"?"#020405":"#e74c3c";return(
  <button style={{width:'60',fontSize:'24px', fontWeight:'bold',cursor:'pointer',
  background:'#da0202',border:'1px solid #999'}} onClick={onsquarClick}>{value}</button>);}
export default function Boar(){
  const[isNext,setXIsNext]=useState(true);
  const[squares,setsquares]=useState(Array(9).fill(null));
  function handleClick(i){ if (squares[i]|| calculateWinner(squares)) return;
    const nextsquares=squares.slice();  nextsquares[i]=isNext?"X":"O";
    setsquares(nextsquares);setXIsNext(!isNext);}const winner= calculateWinner(squares);
  let status;if(winner){status=
    (<div style={{color:'#2ecc',fontSize:'32px',fontWeight:'bold'}}> motidhaa{winner}!</div>);}
  else{status=(<div style=
    {{fontSize:'24px'}}>Tura:{isNext?"x":"O"}</div>);}
return(
  <div className="pro" 
style={{display:'flex', flexDirection:'column',alignItems:'center',marginTop:'50', fontFamily:'sans-serif'}}>
<h1 id="Kun">kun projecttidha</h1>
<h5 id="play">Play Game</h5>
<h2 style={{marginBottom:'10px',color:'black'}}>{status}</h2><div style={{ color:'black',display:'grid', gridTemplateColumns:'repeat(3,60px)',gap:'2px'}}>
{squares.map((squares,i) => (<Eyob key={i}value={squares}onsquarClick={()=>handleClick(i)}/>))}
</div>
<button
style={{marginTop:'20px', padding:'10px', cursor:'pointer'}} onClick={()=> setsquares(Array(9).fill(null))}
>iraa debi jalqabi</button></div>);
function calculateWinner(squares){const lines=[
    [0,1,2], [3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,6],[2,4,6]];
  for(let i=0;i<lines.length;i++){const[a,b,c]=lines[i]; if(squares[a]&&squares[a]===squares[b]&&squares[a]===squares[c])
  {return squares[a];}
  }}return null;}
  