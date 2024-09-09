import React, { useRef } from 'react'

function SelectState() {
    let stateSelectRef = useRef();
  return (
    <div>
       <form>
        <div>
            <label>State</label>
            
          <select onChange={(eO)=>{
                console.log(eO.target.value);
              let stateSelector = eO.target.value;
                if(eO.target.value =="Andhra Pradesh"){
                    console.log("Amaravathi");
                }
                else if(eO.target.value == "Telangana"){
                      console.log("Hyderabad");
                }
                else if(eO.target.value == "Tamilnadu"){
                    console.log("Chennai");
                }
                else if(stateSelector == "Kerala"){
                    console.log("ThiruvananthaPuram");
                }

                switch(stateSelector){
                    case "Andhra Pradesh":
                         console.log("Amaravathi");
                    break;
                    case "Telangana":
                        console.log("Hyderabad");
                    break;
                    case "Kerala":
                        console.log("Thiruvananthapuram");
                    break;
                }
            }}>
                <option>Telangana</option>
                <option>Gujarath</option>
                <option>Andhra Pradesh</option>
                <option>Tamilnadu</option>
                <option>Karnataka</option>
                <option>Maharastra</option>
                <option>Rajasthan</option>
                <option>Kerala</option>
            </select>
        </div>
       </form>
      
    </div>
  )
}

export default SelectState
