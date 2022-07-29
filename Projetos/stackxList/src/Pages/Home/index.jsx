
import { useState } from 'react'
import './style.css'
import { Plus } from 'phosphor-react'
import { CardUser } from '../../Components/CardUser'

export function Home() {
    const [studentName, setStudentName] = useState('');
    const [students, setStudents] = useState([]);

    function handleAddStudent() {
        if (studentName !== '') {
            const newStudent = {
                name: studentName
            }

            setStudents([...students, newStudent]);
            // setStudents(prevState => [...prevState, newStudent]);

            setStudentName('');
        }
        else {
            alert('Para adicionar, digite um nome!😀') 
        }
    }

    function handleRemoveStudent(idStudent) {
        setStudents(students.filter((e, index) => index !== idStudent));
    }

    return (
        <div className="container">
            <h1>Lista de alunos do Curso</h1>

            <div className="input-container">
                <input
                    type="text"
                    placeholder="Nome do aluno"
                    onChange={e => setStudentName(e.target.value)}
                    value={studentName}
                />

                <button title="Adicionar aluno" onClick={handleAddStudent}>
                    <Plus size={26} weight='bold' color='#fff' />
                </button>
            </div>

            <div className="container-list">
                {
                    students.map((student, index) => <CardUser key={index} name={student.name} idStudent={index} onDeleteStudent={handleRemoveStudent} />)
                }
            </div>
        </div>
    )
}