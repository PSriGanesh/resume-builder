import AccordionInput from "./AccordionInput";
import { useState} from "react";


export default function ExperienceForm(props){
    const [isOpen,setIsOpen]=useState(false)
    const [isAddActive,setIsAddActive]=useState(false)
    const [currentIndex,setCurrentIndex]=useState(null)
    const [toBeDeleted,setToBeDeleted] = useState(-1);
    function handleClick(){
        if(isOpen==true)
            setIsOpen(false);
        else
            setIsOpen(true)
    }

    if(isAddActive){
        
        return (
            <form className="education-container" onSubmit={()=>console.log('hi')}>
                <h3 style={{margin:0,}}>Experience</h3>
                <AccordionInput data={props.data} index={currentIndex} onChange={props.onExpChange} type="text" title="Company"  required={true} field="company"/>
                <AccordionInput data={props.data} index={currentIndex} onChange={props.onExpChange} type="text" title="Position" field="position"/>
                <AccordionInput data={props.data} index={currentIndex} onChange={props.onExpChange} type="number" title="Start Year" field="start"/>
                <AccordionInput data={props.data} index={currentIndex} onChange={props.onExpChange} type="number" title="End Year" field="end"/>
                <AccordionInput data={props.data} index={currentIndex} onChange={props.onExpChange} type="text" title="Location" field="loc"/>
                <AccordionInput data={props.data} index={currentIndex} onChange={props.onExpChange} type="text" title="Description" field="desc"/>
                <button type="button" onClick={()=>{
                    setIsAddActive(false)
                    setCurrentIndex(null)
                    localStorage.setItem('experience',JSON.stringify(props.data))
                }}>Save</button>
                <button type="button" onClick={()=>{
                    props.onExpChange(JSON.parse(localStorage.getItem('undoExperience')))
                    setIsAddActive(false)
                    }} >Cancel</button>
            </form>
        )
    }

    return (
        <div className='section-options' >
            <div className='opt-container' onClick={handleClick}>
                <h4>Experience</h4>
                <svg className={`${isOpen && 'active'}`} style={{width: '16px',height: '16px'}}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </div>
            <div className={`section-details ${isOpen && 'active'}`}>
            {(isOpen && props.data.map((ex,index)=>{
                return (
                    <div className="section-item" key={Math.random()}>
                    <h6 style={{flex: '1 1 0',margin: '0px',padding: '7px'}} data-index={index} onClick={(e)=>{
                        localStorage.setItem("undoExperience",JSON.stringify(props.data));
                        setCurrentIndex(e.target.dataset.index)
                        setIsAddActive(true)
                    }}>{ex.company}</h6>
                    {index==toBeDeleted && (
                        <div style={{display: 'flex',position: 'absolute',right: '8px',top: '0.25em'}}>
                        <p style={{margin: '0px'}} onClick={()=>{setToBeDeleted(-1)}}>❌</p>
                        <p style={{margin: '0px'}} onClick={()=>{
                            let newd=props.data;
                            newd.splice(toBeDeleted,1)
                            setToBeDeleted(-1)
                            props.onExpChange(newd)
                        }}>✔</p>
                        </div>
                    )}
                    {(!(index==toBeDeleted)) && <div data-index={index} onClick={e=>{
                        setToBeDeleted(e.target.dataset.index)
                    }}>X</div>}
                    </div>
                )
            }))
            }
            <button className={`section-button ${isOpen && 'active'}`}onClick={()=>{
                localStorage.setItem("undoExperience",JSON.stringify(props.data));
                let ex = props.data
                ex.push({company: '',position: '',start: '',end: '',description: '',location: ''})
                setIsAddActive(true)
                setCurrentIndex(ex.length-1)
                props.onExpChange(ex)
                }}>Add Experience</button>
            </div>
        </div>
    )
}