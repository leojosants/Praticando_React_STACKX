
import { 
    Container,
    Content,
    ImageLogo,
} from './styles';
import logoSvg from '../../assets/Icons/logo.svg';

export function Header() {
    return (
        
        <Container>
            <header></header>
            <Content>
                <ImageLogo src={logoSvg} alt='stackx' />
                <button title='teste'>
                    <img src="https://github.com/leojosants.png" alt="Imagem de Perfil"  />
                </button>
            </Content>
        </Container>
    );
}