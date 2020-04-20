import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
    width: 100%;
    box-sizing: border-box;
    height: 80px;
    padding-left: 27px;
    border: 1px solid #A0A0A0;

    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    line-height: 35px;  
`;

interface CharacterSearchProps {
    value?: string,
    onChange?(q: string): void;
}

const CharacterSearch: React.FC<CharacterSearchProps> = ({ value, onChange }) => {
    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) onChange(event.target.value.toUpperCase());
    };

    return (
        <SearchInput value={value} onChange={onInputChange} />
    );
};

export default CharacterSearch;
