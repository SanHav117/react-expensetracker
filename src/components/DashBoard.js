import '../styles/Style.css';
import DashElement from './DashElement.js';

export default function DashBoard(){
    return(
        <div  class="DashBoard">
            <span style={{ color: 'blue', fontSize: '4rem', fontFamily: 'Rubik', fontWeight: '500', webkitTextStroke: '1px darkblue'  }} >July</span>
            <div class="DashBoardValues" >
            <DashElement displayName='Expenses' />
            <DashElement displayName='Budget' />
            <DashElement displayName='Safe to Spend' />
            </div>
        </div>
    )
}