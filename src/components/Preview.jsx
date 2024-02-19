import PdSection from './PdSection';
import EdSection from './EdSection';
import ExpSection from './ExpSection';

export default function Preview(props){
    
    return (
        <div id="preview-container">
            <PdSection details={props.person.details}/>
            <EdSection data={props.person.education} />
            <ExpSection data={props.person.experience} />
        </div>
    )
}