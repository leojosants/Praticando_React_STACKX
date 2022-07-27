 
import { Trash } from 'phosphor-react'
import './style.css'

export function CardUser(props) {
    return (
        <div className='container-card'>
            <p style={{color:'white'}}>{props.name}</p>
            <button>
                <Trash size={26} weight='bold' color='#fff' />
            </button>
        </div>
    );
}