import React, { useRef } from 'react'

function NamedFunctions() {
    let firstInputName = useRef();
    let lastInputName = useRef();
    let engInputMarks = useRef();
    let telInputMarks = useRef();
    let hinInputMarks = useRef();
    let mathInputMarks = useRef();
    let sciInputMarks = useRef();
    let socInputMarks = useRef();

    let firstLabelName = useRef();
    let lasttLabelName = useRef();
    let  engLabelMarks =useRef();
    let telLabelMarks =useRef();
    let hinLabelMarks =useRef();
    let mathLabelMarks =useRef();
    let sciLabelMarks =useRef();
    let socLabelMarks =useRef();
    let resultLabel =useRef();
    let result;
    let calculateResult =()=>{
      let engMarks = Number(engInputMarks.current.value);
                let telMarks = Number(telInputMarks.current.value);
                let hinMarks = Number(hinInputMarks.current.value);
                let mathMarks = Number(mathInputMarks.current.value);
                let sciMarks = Number(sciInputMarks.current.value);
                let socMarks = Number(socInputMarks.current.value);

                if(engMarks>=35 && telMarks>=35 && hinMarks>=35 && mathMarks>=35 && sciMarks>=35 && socMarks>=35){
                   result = "Passed";
                }else{
                  result = "failed";
                }

                // engLabelMarks.current.innerHTML = engMarks >= 35 ? "Pass" : "Fail";
                // telLabelMarks.current.innerHTML = telMarks >= 35 ? "Pass" : "Fail";
                // hinLabelMarks.current.innerHTML = hinMarks >=35 ? "Pass" : "Fail";
                // mathLabelMarks.current.innerHTML = mathMarks >=35 ? "Pass" : "Fail";
                // sciLabelMarks.current.innerHTML = sciMarks >=35 ? "Pass" : "Fail";
                // socLabelMarks.current.innerHTML = socMarks >=35 ? "Pass" : "Fail";
                let Total = engMarks+telMarks+hinMarks+mathMarks+sciMarks+socMarks;
                alert(`Total Marks of ${firstInputName.current.value}${lastInputName.current.value} are ${Total}`);
                resultLabel.current.innerHTML = ` ${firstInputName.current.value}${lastInputName.current.value} ${result} in tenth class  and total marks are ${Total}`;
      console.log(`abc`)

    }
    let engOnBlur=()=>{
      engInputMarks.current.style.backgroundColor ="";
    }
    let engOnFocus=()=>{
      engInputMarks.current.style.backgroundColor = "lightgreen";
    }
    let engOnChange=()=>{
      if(engInputMarks.current.value > 0 && engInputMarks.current.value<=100){
        if(engInputMarks.current.value>=35){
                engLabelMarks.current.innerHTML = "Pass";
                engLabelMarks.current.style.backgroundColor = "green";
        }
        else{
          engLabelMarks.current.innerHTML = "Fail";
          engLabelMarks.current.style.backgroundColor = "red";
        }
       }else{
            engLabelMarks.current.innerHTML = "Invalid";
            engLabelMarks.current.style.backgroundColor = "orange";
       }
    }
    let telOnFocus=()=>{
      telInputMarks.current.style.backgroundColor = "lightgreen";
    }
    let telOnBlur=()=>{
      telInputMarks.current.style.backgroundColor ="";
    }
    let telOnChange=()=>{
      if(telInputMarks.current.value > 0 && telInputMarks.current.value<=100){
        if(telInputMarks.current.value>=35){
                telLabelMarks.current.innerHTML = "Pass";
                telLabelMarks.current.style.backgroundColor = "green";
        }
        else{
          telLabelMarks.current.innerHTML = "Fail";
          telLabelMarks.current.style.backgroundColor = "red";
        }
       }else{
            telLabelMarks.current.innerHTML = "Invalid";
            telLabelMarks.current.style.backgroundColor = "orange";
       }
    }
    let hinOnFocus=()=>{
      hinInputMarks.current.style.backgroundColor = "lightgreen";
    }
    let hinOnBlur=()=>{
      hinInputMarks.current.style.backgroundColor ="";
    }
    let hinOnChange=()=>{
      if(hinInputMarks.current.value > 0 && hinInputMarks.current.value<=100){
        if(hinInputMarks.current.value>=35){
                hinLabelMarks.current.innerHTML = "Pass";
                hinLabelMarks.current.style.backgroundColor = "green";
        }
        else{
          hinLabelMarks.current.innerHTML = "Fail";
          hinLabelMarks.current.style.backgroundColor = "red";
        }
       }else{
            hinLabelMarks.current.innerHTML = "Invalid";
            hinLabelMarks.current.style.backgroundColor = "orange";
       }
    }
    let mathOnFocus=()=>{
      mathInputMarks.current.style.backgroundColor = "lightgreen";
    }
    let mathOnBlur=()=>{
      mathInputMarks.current.style.backgroundColor ="";
    }
    let mathOnChange=()=>{
      if(mathInputMarks.current.value > 0 && mathInputMarks.current.value<=100){
        if(mathInputMarks.current.value>=35){
                mathLabelMarks.current.innerHTML = "Pass";
                mathLabelMarks.current.style.backgroundColor = "green";
        }
        else{
          mathLabelMarks.current.innerHTML = "Fail";
          mathLabelMarks.current.style.backgroundColor = "red";
        }
       }else{
            mathLabelMarks.current.innerHTML = "Invalid";
            mathLabelMarks.current.style.backgroundColor = "orange";
       }
    }
    let sciOnFocus=()=>{
      sciInputMarks.current.style.backgroundColor = "lightgreen";
    }
    let sciOnBlur=()=>{
      sciInputMarks.current.style.backgroundColor ="";
    }
    let sciOnChange=()=>{
      if(sciInputMarks.current.value > 0 && sciInputMarks.current.value<=100){
        if(sciInputMarks.current.value>=35){
                sciLabelMarks.current.innerHTML = "Pass";
                sciLabelMarks.current.style.backgroundColor = "green";
        }
        else{
          sciLabelMarks.current.innerHTML = "Fail";
          sciLabelMarks.current.style.backgroundColor = "red";
        }
       }else{
            sciLabelMarks.current.innerHTML = "Invalid";
            sciLabelMarks.current.style.backgroundColor = "orange";
       }
    }
    let socOnFocus=()=>{
      socInputMarks.current.style.backgroundColor = "lightgreen";
    }
    let socOnBlur=()=>{
      socInputMarks.current.style.backgroundColor ="";
    }
    let socOnChange=()=>{
      if(socInputMarks.current.value > 0 && socInputMarks.current.value<=100){
        if(socInputMarks.current.value>=35){
                socLabelMarks.current.innerHTML = "Pass";
                socLabelMarks.current.style.backgroundColor = "green";
        }
        else{
          socLabelMarks.current.innerHTML = "Fail";
          socLabelMarks.current.style.backgroundColor = "red";
        }
       }else{
            socLabelMarks.current.innerHTML = "Invalid";
            socLabelMarks.current.style.backgroundColor = "orange";
       }
    }
  return (
    <div>
      <form>
        <h1>Tenth Marks</h1>
        <div>
        <label >First Name</label>
        <input type="text" ref={firstInputName} 
        onFocus={()=>{
            firstInputName.current.style.backgroundColor = "lightgreen";
        }}
        onBlur={()=>{
            firstInputName.current.style.backgroundColor ="";
        }}
        onChange={()=>{

        }}
        ></input>
        <label ref={firstLabelName}></label>
        </div>
        <div>
        <label>Last Name</label>
        <input type="text" ref={lastInputName}
        onFocus={()=>{
          lastInputName.current.style.backgroundColor = "lightgreen";
      }}
      onBlur={()=>{
          lastInputName.current.style.backgroundColor ="";
      }}
      onChange={()=>{
          
      }}
        ></input>
        <label ref={lasttLabelName}></label>
        </div>
        <div>
        <label>English</label>
        <input type="number" ref={engInputMarks}
        onFocus={()=>{
          engOnFocus();
      }}
      onBlur={()=>{
          engOnBlur();
      }}
      onChange={()=>{
         engOnChange();
      }}
        ></input>
        <label ref={engLabelMarks}></label>
        </div>
        <div>
        <label>Telugu</label>
        <input type="number" ref={telInputMarks}
         onFocus={()=>{
          telOnFocus();
      }}
      onBlur={()=>{
          telOnBlur();
      }}
      onChange={()=>{
        telOnChange();
      }}
        ></input>
        <label ref={telLabelMarks}></label>
        </div>
        <div>
        <label>Hindi</label>
        <input type="number" ref={hinInputMarks}
         onFocus={()=>{
          hinOnFocus();
      }}
      onBlur={()=>{
          hinOnBlur();
      }}
      onChange={()=>{
        hinOnChange();
      }}
        ></input>
        <label ref={hinLabelMarks}></label>
        </div>
        <div>
        <label>Maths</label>
        <input type="number" ref={mathInputMarks}
         onFocus={()=>{
          mathOnFocus();
      }}
      onBlur={()=>{
          mathOnBlur();
      }}
      onChange={()=>{
          mathOnChange();
      }}
        ></input>
        <label ref={mathLabelMarks}></label>
        </div>
        <div>
        <label>Science</label>
        <input type="number" ref={sciInputMarks}
         onFocus={()=>{
          sciOnFocus();
      }}
      onBlur={()=>{
          sciOnBlur();
      }}
      onChange={()=>{
          sciOnChange();
      }}
        ></input>
        <label ref={sciLabelMarks}></label>
        </div>
        <div> 
        <label>Social</label>
        <input type="number" ref={socInputMarks}
         onFocus={()=>{
          socOnFocus();
      }}
      onBlur={()=>{
          socOnBlur();
      }}
      onChange={()=>{
          socOnChange();
      }}
        ></input>
        <label ref={socLabelMarks}></label>
        </div>  
        <div>
            <button type="button" onClick={()=>{
                calculateResult();
            }}
            >Calculate result</button>
            <div><label ref={resultLabel}> Toltal Marks</label></div>
        </div>
      </form>
    </div>
  )
}

export default NamedFunctions
