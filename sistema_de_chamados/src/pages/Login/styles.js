import styled from 'styled-components';

export const Container= styled.div`
    /* max-width: 800px; */
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transform: translate(0%, 27%);
`;
//transform: translate(110 %, 6 %);

export const Title = styled.div`
    font-size: 30px;
    margin-bottom: 24px;
`;

export const Form = styled.div`
    width: 400px;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #dee2e6; 
    border-radius: 10px;
    padding: 32px 24px;
`;

//#ff8717

export const Input = styled.input`
    width: 100%;
    height: 30px;
    margin-bottom: 24px;
    border-radius: 5px;
    padding: 10px 10px;
`;

export const Button = styled.button`
    width: 100%;
    height: 30px;
    border-radius: 30px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;

`;

export const Image = styled.img`
    width: 80px;
    height: 80px;
    transform: translate(500%, 150%);
`;

