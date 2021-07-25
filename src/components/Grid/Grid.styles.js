import styled from "styled-components/macro";

export const Container = styled.div`
    max-width: 1280px;
    margin: 20px;
    padding: 0 20px;
    h1 {
        font-size: 2rem;
        font-weight: 100;
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
    grid-gap: 2rem;
`;

export const Image = styled.img`
    width: 100%;
    max-width: 720px;
    transition: all 0.3s;
    border-radius: 20px;
    object-fit: cover;
    cursor: pointer;
    height: 100%;
    transition: all 0.3s;

    :hover {
        transform: scale(1.1);
    }
`;