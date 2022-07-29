
import { 
    Container,
    Content,
    ImageLogo,
} from './styles';
import {} from './styles';
import logo from '../../assets/Icons/logo.svg';

export function Header() {
    return (
        <Container>
            <Content>
                <ImageLogo src={logo} alt='stackx' />
                <button title='teste'>
                    <img src="https://github.com/leojosants.png" alt="Imagem Logo"  />
                </button>
            </Content>
        </Container>
    );
}