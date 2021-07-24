import styled from "styled-components/macro";

export const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;

`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
    grid-gap: 2rem;
`;