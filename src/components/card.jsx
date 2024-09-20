import star from "/img/icon.svg"
import "./card.css"
export function Card({setSubmit,setRate,rate}) {
  let buttons = [1,2,3,4,5]

  return (

  <div className="main">
  <img className="card-img" src={star} alt="star-icon" />
   <h1 className="card-h1">How did we do?</h1>
   <p className="card-p">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
    
    <div className="buttons">
      {buttons.map(button => <button key={button} onClick={()=>setRate(button)} style={{backgroundColor: button ==rate ? "#7C8798" : "", color: button ==rate ? "white" : ""}} >{button}</button>)}
    </div>

<button className="submit" onClick={()=>setSubmit(true)}>SUBMIT</button>

  </div>
  );
}