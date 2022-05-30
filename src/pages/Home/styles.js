import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    width: 100%;
    max-width: 1100px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    margin: 2rem 0 0 0;
`

export const Header = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        span {
            font-weight: 600;
        }

        img {
        width: 100%;
        max-width: 5rem;

        border-radius: 50%;
        border: 2px solid #A9A9A9;
    }
}
`

export const InputAndButton = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    width: 100%;

    padding: 0.5rem 1rem;

    box-shadow: 1px 2px 2px 2px #A9A9A9;

    input {
        width: 100%;

        font-size: 1.2rem;
    }

    button {
        width: 100%;
        max-width: 8rem;

        padding: 0.5rem 0;
        border-radius: 0.5rem;

        color: #FFFFFF;
        background: #C71585;

        &:hover {
            transition: .3s;
            filter: brightness(0.9);
        }
    }
`