import resultIcon from "/img/Online payment_Two Color(1) 2.svg"
import "./result.css"
export function Result({rate}) {
  return (
    <div className="result">
    <img  className="result-img" src={resultIcon} alt="" />
    <div className="comment">You selected {rate} out of 5</div>
    <h1 className="result-h1">Thank you!</h1>
    <p className="result-p">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    </div>
  );
}