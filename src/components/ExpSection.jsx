export default function ExpSection(props){
    
    return (
        (props.data.length!=0 &&
        <>
            <h3>Experience</h3>
            <hr style={{width: '100%',margin: '-15px 0px 2px 0px'}}/>
            {props.data.map(ex=>{
                return (

                    <div key={Math.random()}>
                            <h4 className="exp-comp" style={{margin: '0px',}}>{ex.company}{!(ex.loc==undefined || ex.loc=="")&&', '}{ex.loc}</h4>
                            <div style={{display: 'flex',justifyContent: 'space-between'}}>
                                <div className="exp-position">{ex.position}</div>
                                <div className="exp-time">{ex.start}-{ex.end}</div>
                            </div>
                            <div className="exp-desc">{ex.desc}</div>

                    </div>

                // <ul key={Math.random()}>
                //     <li>{ed.company}</li>
                //     <li>{ed.position}</li>
                //     <li>{ed.start}</li>
                //     <li>{ed.end}</li>
                //     <li>{ed.location}</li>
                //     <li>{ed.qual}</li>
                // </ul>
                )
            })}
        </>)
    )

}