import React from 'react'
import { styled } from 'styled-components'
import { timeList } from '../../data/available/checkAvailableTimeTableData'

export default function TimeComponent() {
  return (
    <Styled.TimeContainer>
      {timeList.map((time, i) => {
        return <Styled.Time key={time+i}>{time}</Styled.Time>
      })}
    </Styled.TimeContainer>
  )
}

const Styled = {
  TimeContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
  `,
  Time: styled.div`
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: -0.03rem;
  `,
}
