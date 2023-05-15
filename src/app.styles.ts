import styled from "styled-components";

export const AppContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;`;

export const container = styled.div`
width: 100%;
max-width: 750px;
display: flex;
align-items: flex-end;

@media (max-width: 750px) 
{flex-direction: column;}`;

export const infoArea = styled.div`
display: flex;
flex-direction: column;
width: auto;

@media (max-width: 750px) 
{margin-bottom: 50px;
align-items: center}`;

export const logo = styled.a`display: block;`;

export const info = styled.div`
width: 100%;
margin: 10px 0;
display: flex;
justify-content: space-between;

@media (max-width: 750px) 
{    display: flex;
    justify-content: space-around;}`;

export const gridArea = styled.div`
display: flex;
justify-content: flex-end;
flex: 1;

@media (max-width: 750px) 
{justify-content: center;
margin: 0 20px}`;

export const grid = styled.div`
display: grid;
grid-template-columns:  repeat(4, 1fr);
gap: 10px;
width: 430px;

@media (max-width: 750px) 
{grid-template-columns:  repeat(3, 1fr);}`