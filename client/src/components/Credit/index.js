import React, {useState} from "react";
import Credit from "react-credit-cards"
import "./style.css"

function App(){
    const [number, setNumber] = useState("")
    const [name, setName] = useState("")
    const [exp, setExp] = useState("")
    const[cvc, setCvc] =useState("")
    const [focus, setFocus]=useState("")


return (
    <div className="Credit">
        <Credit
        name={name}
        number={number}
        exp={exp}
        cvc={cvc}
        focused={focus}
       />
    <form>
    <input type="tel" name="number" placeholder="Card Number" value={number} onChange={e => setNumber(e.target.value)} onFocus={e => setFocus(e.target.name)}
   />
   <input type="text" name="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} onFocus={e => setFocus(e.target.name)}
   />
   <input type="text" name="exp" placeholder="Expire Date" value={exp} onChange={e => setExp(e.target.value)} onFocus={e => setFocus(e.target.name)}
   />
    <input type="tel" name="cvc" placeholder="CVC" value={exp} onChange={e => setCvc(e.target.value)} onFocus={e => setFocus(e.target.name)}
   />
    </form>
    </div>
    
   
)
}
export default Credit;