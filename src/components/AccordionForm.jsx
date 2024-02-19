import {useState} from 'react';
import AccordionInput from './AccordionInput'
export default function AccordionForm(props){
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
                <h3 style={{margin:0,}}>Education</h3>
                <AccordionInput data={props.data} index={currentIndex} onChange={props.onEdChange}type="text" title="Institution Name"  required={true} field="name"/>
                <AccordionInput data={props.data} index={currentIndex} onChange={props.onEdChange}type="text" title="Qualification" field="qual"/>
                <AccordionInput data={props.data} index={currentIndex} onChange={props.onEdChange}type="number" title="Start Year" field="start" />
                <AccordionInput data={props.data} index={currentIndex} onChange={props.onEdChange}type="number" title="End Year" field="end" />
                <AccordionInput data={props.data} index={currentIndex} onChange={props.onEdChange}type="text" title="Grade" field="grade" />
                <button type="button" onClick={()=>{
                    setIsAddActive(false)
                    setCurrentIndex(null)
                    localStorage.setItem('education',JSON.stringify(props.data))                    
                }}>Save</button>
                <button type="button" onClick={()=>{
                    props.onEdChange(JSON.parse(localStorage.getItem('undoEducation')))
                    setIsAddActive(false)
                    }} >Cancel</button>
            </form>
        )
    }
    return (
        <div className='section-options' >
            <div className='opt-container' onClick={handleClick}>
                <h4>Education</h4>
                <svg className={`${isOpen && 'active'}`} style={{width: '16px',height: '16px'}}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </div>
            <div className={`section-details ${isOpen && 'active'}`}>
            {(isOpen && props.data.map((ed,index)=>{
                return (
                    <div className="section-item" key={Math.random()}>
                    <h6 style={{flex: '1 1 0',margin: '0px',padding: '7px'}} data-index={index} onClick={(e)=>{
                        localStorage.setItem("undoEducation",JSON.stringify(props.data));
                        setCurrentIndex(e.target.dataset.index)
                        setIsAddActive(true)
                    }}>{ed.name}</h6>
                    {index==toBeDeleted && (
                        <div style={{display: 'flex',position: 'absolute',right: '8px',top: '0.25em'}}>
                        <p style={{margin: '0px'}} onClick={()=>{setToBeDeleted(-1)}}>❌</p>
                        <p style={{margin: '0px'}} onClick={()=>{
                            let newd=props.data;
                            newd.splice(toBeDeleted,1)
                            setToBeDeleted(-1)
                            props.onEdChange(newd)
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
                let ed = props.data
                localStorage.setItem("undoEducation",JSON.stringify(props.data));
                ed.push({start: '',end: '',name: ''})
                props.onEdChange(ed)
                setCurrentIndex(ed.length-1)
                setIsAddActive(true)
                }}>Add Education</button>
            </div>
        </div>
    )

}