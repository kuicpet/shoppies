import React from 'react';

// styles
import { Container, Content } from './SearchBar.styles';

import searchIcon from '../../images/search.svg';

const SearchBar = (props) => {
    
    return (
        <Container>
            <Content>
                <img  src={searchIcon} alt="" />
                <input 
                    type="text"
                    placeholder="Search movie"
                    value={props.value}
                    onChange={(e) => props.setQuery(e.currentTarget.value)}                 
                />
            </Content>
        </Container>
    )
};


export default SearchBar;