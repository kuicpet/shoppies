import React from 'react';
import { Link } from 'react-router-dom';

// styles
import { Container, Content } from './Header.styles';

const Header = () => (
    <Container>
        <Content>
            <Link to="/">
                The Shoppies
            </Link>
        </Content>
    </Container>
);

export default Header;