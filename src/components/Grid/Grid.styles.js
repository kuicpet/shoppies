import styled from "styled-components/macro";

export const Container = styled.div`
    max-width: 1280px;
    margin: 20px;
    padding: 0 20px;
    h1 {
        font-size: 2rem;
        font-weight: 100;
        color: #fff;
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
    grid-gap: 2rem;

    button {
        font-size: 1.2rem;
        z-index: 10;
        color: #fff;
        background-color: #000;
        height: 2rem;
        text-align: center;
        width: 90%;
        margin: 0 auto;
        border: none;

        :hover {
            color: #000;
            background-color: #fff;
            cursor: pointer;
        }
    }
`;

export const Image = styled.img`
    position: relative;
    width: 100%;
    max-width: 720px;
    transition: all 0.3s;
    border-radius: 20px;
    object-fit: cover;
    cursor: pointer;
    height: 100%;
    transition: all 0.3s;

    :hover{
        transform: scale(1.05);
        opacity: 1;
    }
    .overlay {
	position: absolute;
	background: rgba(0, 0, 0, 0.8);
	width: 100%;
	transition: 0.5s ease;
	opacity: 0;
	bottom: 0;
	font-size: 20px;
	padding: 20px;
	text-align: center;
}
`;
