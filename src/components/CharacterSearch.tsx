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

const CharacterSearch: React.FC<IProps> = ({ value, onChange, className }) => {
    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (onChange) onChange(event.target.value.toUpperCase());
    };

    return (
        <SearchInput className={className} value={value} onChange={onInputChange} />
    );
};

export default CharacterSearch;
export interface IProps {
    value?: string;
    onChange?(q: string): void;
    className?: string;
}
