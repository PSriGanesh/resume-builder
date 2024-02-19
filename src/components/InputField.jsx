export default function InputField(props){
    return (
        <label className="inputField">
            <h4>{props.title}</h4>
            <input type={props.type} value={props.value} required={props.required} onChange={(e)=>{
                console.log(props)
                console.log(e.target.value)
                props.onChange(props.field,props.property,e.target.value)
                }}/>
        </label>
    )
}