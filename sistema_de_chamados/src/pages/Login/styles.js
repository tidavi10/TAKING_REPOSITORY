import styled from 'styled-components';

export const Container= styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #dee2e6; 


    @media (min-width: 700px){

}

    @media (min-width: 1100px){

}
`;
/*@media (max-width: 800px) and (min-width: 720px){
}*/

export const Title = styled.div`
    font-size: 30px;
    margin-bottom: 40px;
    margin-top: 50px;
`;

export const Form = styled.div`
    width: 400px;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #dee2e6; 
    border-radius: 10px;
    padding: 32px 24px;
`;



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
    transform: translate(0%, 50%);
`;

