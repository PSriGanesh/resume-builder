import InputField from './InputField'
import AccordionForm from './AccordionForm'
import ExperienceForm from './ExperienceForm'

export default function Options(props){
    console.log(props.person.details.name)
    
    return (
        <div className="options-container">
            <div className="personal-container">
                <h3 style={{margin:0,}}>Personal Details</h3>
                <InputField type="text" title="Name" onChange={props.onChange} value={props.person.details.name} field="details" property="name"/>
                <InputField type="email" title="E-mail" onChange={props.onChange} value={props.person.details.email} field="details" property="email"/>
                <InputField type="number" title="Phone Number" onChange={props.onChange} value={props.person.details.phno} field="details" property="phno"/>
            </div>
            <AccordionForm data={props.person.education} mode='education' onEdChange={props.onEdChange}/>
            <ExperienceForm  saveState={props.saveState} reloadState={props.reloadState} data={props.person.experience} onExpChange={props.onExpChange}/>
            <button style={{backgroundColor: '#009866',marginTop: '10px',color: 'white'}}onClick={()=>{window.print()}}>Print</button>
            
            
        </div>
    )
}