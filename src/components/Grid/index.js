import React from "react";
import { Container, Content } from "./Grid.styles";

const MovieList = ({children}) => (
    <Container>
        <Content>{children}</Content>
    </Container>
);

export default MovieList;