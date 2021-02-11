import styled from 'styled-components';

export const Container= styled.div`
    /* max-width: 800px; */
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 80px 100px;
`;
//transform: translate(110 %, 6 %);

export const Title = styled.div`
    font-size: 20px;
    margin-bottom: 24px;
`;

export const Form = styled.div`
    width: 400px;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #ff8717;
    border-radius: 10px;
    padding: 32px 24px;
`;

export const Input = styled.input`
    width: 100%;
    height: 24px;
`;

export const Button = styled.button`
    width: 100%;
    height: 24px;
`;
