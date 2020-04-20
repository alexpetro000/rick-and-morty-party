import React from 'react';
import styled from 'styled-components';

const Container = styled.div((props: IProps) => `
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    > * {
        width: calc(100%/${props.cols} - ${props.gap}*${props.cols - 1}/${props.cols});
        margin-right: ${props.gap};
        margin-top: ${props.gap};
        
        &:nth-child(${props.cols}n) {
            margin-right: 0;
        }
        &:last-child {
            margin-right: 0;
        }
        &:nth-child(-n+4) {
            margin-top: 0;
        }
    }
`);

const CharacterList: React.FC<IProps> = ({
    children, className, gap, cols,
}) => {
    if (typeof gap === 'number') gap = `${gap.toString()}px`;
    if (!gap) gap = '0';
    return (
        <Container className={className} gap={gap} cols={cols}>
            {children}
        </Container>
    );
};

export default CharacterList;
export interface IProps {
    className?: string,
    gap?: number | string
    cols: number
}
