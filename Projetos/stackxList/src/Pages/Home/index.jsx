
import './style.css';
import { Plus } from 'phosphor-react';
import { CardUser } from '../../Components/CardUser';

export function Home() {

    return (
        <div className="container">

            <h1>Lista de alunos do curso</h1>

            <div className="input-container">
                <input type="text" placeholder="Nome do aluno" />
                <button title="Adicionar aluno">
                    <Plus size={26} weight='bold' color='#FFF' />
                </button>
            </div>

            <div className="container-list">
                <CardUser name="Leonardo" />
                <CardUser name="Leonardo José" />
                <CardUser name="Leonardo José de Oliveira" />
                <CardUser name="Leonardo José de Oliveira Santos" />
            </div>

        </div>
    )
}