import styled from "styled-components"

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-wrap:wrap;
    margin-top: 20px;
`

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border: 1px solid black;
    padding: 20px;
    border-radius: 5px;
`

export const Image = styled.img`
    margin-top: 20px;
    margin-bottom: 10px;
    align-self: center;
`

export const TopSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: Josefin Sans, sans-serif;
`

export const BottomSection = TopSection`
    text-indent: 20px;
`