import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 600px;
    a {
        text-decoration: none;
    }
    img {
        margin-bottom: 1rem;
        margin-top: 1rem;
    }
`;

export const UlContainer = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export const InitialDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h2`
    text-align: center;
    margin-bottom: 1rem;
    margin-top: 1rem;
    font-family: 'IBM Plex Sans', sans-serif;
`;

export const Desc = styled.p`
    text-align: center;
    margin-bottom: 1rem;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 18px;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const Text = styled.span`
    margin-bottom: 1rem;
    font-family: 'IBM Plex Sans', sans-serif;
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
    margin-bottom: 1rem;
`;