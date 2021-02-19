import styled from 'styled-components';

export const Header = styled.div`
    height: 100%;
    flex-direction: column;
    background: #DEE2E6;
    align-items: center;
`;

export const Button = styled.button`
    width: 15%;
    background-color: #C4C4C4;
    border-radius: 10px;
    color: black;
    padding: 15px 32px;
    text-align: center;
    justify-content: center;
    font-size: 16px;
    display: flex;
    margin: 5px;
`;

export const Title = styled.div`
    font-size: 30px;
    margin-bottom: 20px;
    padding: 32px 24px;
`;

export const EditionArea = styled.div`
    width: 90%;
    height: 50vh;
    border: 1px solid #eee;
    padding: 16px 0;
    display: flex;
    justify-content: space-between;
`;

export const InputArea = styled.div`
    width: 75%;
    
`;

export const EditionDescription = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;
    padding: 0 10px;
    background: #81b29a;
`;

export const FilterSelector = styled.div`
    width: 25%;
    margin: 5px;
	background: tomato;
	text-align: center;
	font-size: 1.5em;
`;

export const Input = styled.div`
    width: 100%;
    height: 30px;
    margin-bottom: 24px;
    border-radius: 5px;
    margin-top: 5px;
`;