import styled  from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    padding: 0 20px;
    background-color: #000;
    justify-content: center;
`;

export const Content = styled.div`
    position: relative;
    max-width: 1280px;
    width: 50%;
    height: 55px;
    background: #353535;
    margin: 0 auto;
    border-radius: 40px;
    color: #fff;

    img {
        position: absolute;
        left: 15px;
        top: 14px;
        width: 30px;
    }

    input {
        font-size: 1.2rem;
        position: absolute;
        left: 0;
        margin: 8px 0;
        padding: 0 0 0 60px;
        border: 0;
        width: 95%;
        background: transparent;
        height: 40px;
        color: #fff;

        :focus {
            outline: none;
        }

    }
`;