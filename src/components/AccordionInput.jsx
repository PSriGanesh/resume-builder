export default function AccordionInput(props){

    return (
        <label className="inputField">
            <h4>{props.title}</h4>
            <input type={props.type} required={props.required} value={props.data[props.index][props.field]} onChange={(e)=>{
                
                let newarr=props.data;
                newarr[props.index][props.field]=e.target.value
                props.onChange(newarr)
            }}/>
        </label>
    )
}