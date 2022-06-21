import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps{
    newTransactionModal: () => void;
}

export function Header({newTransactionModal}: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Dt Money" />
                <button type="button"
                onClick={newTransactionModal}
                >Nova Transacao
                </button>
            </Content>
        </Container>
    )
}