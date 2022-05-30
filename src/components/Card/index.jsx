import { Container, Content } from './styles'


export function Card({ name, time }) {
    return (
        <Container>
            <Content>

                <strong>{name}</strong>
                <small>{time}</small>

            </Content>
        </Container>
    )
}