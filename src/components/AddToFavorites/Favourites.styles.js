import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const Content = styled.div`
    position: absolute;
	background: rgba(0, 0, 0, 0.8);
	width: auto;
    opacity: 0;
	transition: 0.5s ease;
	bottom: 0;
	padding: 20px;
	text-align: center;
    color: #fff;
    cursor: pointer;

    :hover {
        opacity: 1;
    }
`;