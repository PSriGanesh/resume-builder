export default function PdSection(props){
    return (
        <div className="personal-details-container">
            <div className="name-container">
            {!(props.details.name==undefined ||props.details.name=="") && <h4>{props.details.name}</h4>}
            </div>
            <hr />
            <div className="other-personal-details">
            {!(props.details.email==undefined ||props.details.email=="") && (<div><svg style={{width: '15px',height: '15px',display: 'inline',marginRight: '5px',}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email-outline</title><path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" /></svg><h4 style={{margin: '0px',}}>E-mail: {props.details.email}</h4></div>)}
            {!(props.details.phno==undefined ||props.details.phno=="") &&<div><svg style={{width: '15px',height: '15px',display: 'inline',marginRight: '5px',}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>phone</title><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg><h4>Phone: {props.details.phno}</h4></div>}
            </div>
        </div>
    )
}