import styled from "styled-components/macro";

export const Container = styled.div`
    background-color: #000;
    padding: 0 20px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    margin: 0 auto;

    a {
        color: #fff;
        text-decoration: none;
        font-size: 1.5rem;
    }

    @media screen and (max-width: 600px){
        a {
            font-size: 1.2rem;
        }
    }
`;