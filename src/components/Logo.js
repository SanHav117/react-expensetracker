import '../styles/Style.css';
import RupeeLogo from '../assets/RupeeLogo.jpg'

export default function Logo (){
    return(
        <div class="header">
            <img src={RupeeLogo} />
            EXPENSE TRACKER APP
            <img src={RupeeLogo} />
        </div>
    )
}