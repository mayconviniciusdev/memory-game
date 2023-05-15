import styled from "styled-components";

type containerProps = {shownBackground: boolean}
type iconProps = {opacity?: number}

export const container = styled.div<containerProps>`
background-color: ${props => props.shownBackground ? '#1550FF' : '#E2E3E3'};
height: 100px;
border-radius: 20px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;`;

export const icon = styled.img<iconProps>`
width: 40px;
height: 40px;
opacity: ${props => props.opacity ?? 1};`;