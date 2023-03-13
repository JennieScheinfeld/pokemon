import styled from "styled-components"

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    flex-wrap:wrap;
    margin: 20px;
`

export const Table = styled.table`
    border: 1px solid black;
    width: 20%;
    margin-top: 20px;
    border-radius: 5px;
`


export const InvisibleButton = styled.button`
    background: transparent;
    border: none;
    padding: 20px;
`

export const Icon = styled.img`
    height: 30px;
    width: 30px;
    border-left: 10px;
    border-right: 2px;
`