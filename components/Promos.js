import React from 'react'
import styled from 'styled-components'

const Promos = () => {
  return (
    <Wrapper>
        <OfferCard>
            <Title>Welcome to SCEM</Title>
            <Description>Welcome to Sahyadri College of Engineering and Management,Mangalore.</Description>
            <Placeholder />
            <Additional style={{fontSize: '1.0rem'}}>
                Pass Type: <span>Student CSE</span>
            </Additional>
            <Additional style={{color: '#3773f5'}}>Visit Website</Additional>
        </OfferCard>
        <OfferCard>
            <Title>Welcome to REMS</Title>
            <Description>Welcome to Rotary English Medium School, Moodbidri.</Description>
            <Placeholder />
            <Additional style={{fontSize: '1.0rem'}}>
                Pass Type: <span>Visitor</span>
            </Additional>
            <Additional style={{color: '#3773f5'}}>Visit Website</Additional>
        </OfferCard>
    </Wrapper>
  )
}

export default Promos

const Wrapper = styled.div` 
    margin-top: 2rem;
    padding-right: 1rem;
`
const OfferCard = styled.div`
    width: 21rem;
    height: 11rem;
    border: 1px solid #282b2f;
    margin-bottom: 1rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
`

const Title = styled.div`
    font-weight: 700;
    font-size: 1.0rem;
    margin-bottom: 0.1rem;
`

const Description = styled.div`
    font-size: 0.75rem;
`

const Placeholder = styled.div`
    flex:1;
`
const Additional = styled.div`
    font-size: 0.75rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > span {
        color: #8a919e;
        font-size: 1rem;
    }
`