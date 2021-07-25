import React from "react";
import { Container, Content } from "./Grid.styles";

const MovieList = ({heading,children}) => (
    <Container>
        <h1>{heading}</h1>
        <Content>
            {children}
        </Content>
    </Container>
);

export default MovieList;