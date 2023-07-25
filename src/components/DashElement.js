import '../styles/Style.css';

export default function DashElement(props){
    return(
        <div class="dash">
            <span><span class="displayname">{props.displayName}</span></span>
            <span><span class="displayvalue">Rs.5000000</span></span>
        </div>
    )
}