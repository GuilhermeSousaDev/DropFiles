import styled from 'styled-components';

export const Container = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
        margin-bottom: 1rem;
    }
`;

export const Button = styled.button`
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    background-color: ${(props) => props.theme};
    color: ${(props) => props.color};
    border-color: #212529;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
`;

export const Title = styled.h2`
    text-align: center;
    margin-bottom: 1rem;
    font-family: 'IBM Plex Sans', sans-serif;
`;