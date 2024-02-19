
export default function EdSection(props){
    

    return (
        (props.data.length!=0 &&
        <>
            <h3 style={{margin: '0px',marginBottom: '10px',}}>Education</h3>
            <hr style={{width: '100%',margin: '-5px 0px 2px 0px'}}/>
            {props.data.map(ed=>{
                return (
                    <div key={Math.random()}>
                            <h4 className="education-qual" style={{margin: '0px',}}>{ed.qual}</h4>
                            <div style={{display: 'flex',justifyContent: 'space-between'}}>
                                <div className="education-name">{ed.name}{" | "}<strong style={{fontWeight: 600,}}>{" Grade: "}{ed.grade}</strong></div>
                                <div className="education-start">{ed.start}-{ed.end}</div>
                            </div>

                    </div>
                )
            })}
        </>)
    )
}