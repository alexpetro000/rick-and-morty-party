import React, { useState } from 'react';
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

const CharacterSearch: React.FC<IProps> = React.memo(({ onChange, className }) => {
    const [localVal, setLocalVal] = useState<string>('');

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newVal = event.target.value.toUpperCase();
        setLocalVal(newVal);
        if (onChange) onChange(newVal);
    };

    return (
        <SearchInput className={className} value={localVal} onChange={onInputChange} />
    );
});

export default CharacterSearch;
export interface IProps {
    onChange?(q: string): void;
    className?: string;
}
