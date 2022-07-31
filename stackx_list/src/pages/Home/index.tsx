
import { Header } from '../../components/Header';
import { 
    Container,
    Content,
    FilterForm,
} from './styles'

export function Home() {
    return (
        <Container>
            <Header />
            <Content>
              <h1>Lista de alunos do curso</h1>

              <FilterForm>
                <div>
                    <label htmlFor="nome">Pesquisar</label>
                    <input type="text" id='nome' placeholder='Nome do aluno' />
                </div>
                <div>
                    <label htmlFor="nascionalidade">Nascionalidade</label>
                    <select id="nascionalidade">
                        <option value="">Todas</option>
                    </select>
                </div>

              </FilterForm>

            </Content>
   
        </Container>
    )
}