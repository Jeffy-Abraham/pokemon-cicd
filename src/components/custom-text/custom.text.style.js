
import styled, { css } from 'styled-components'
export const Container = styled.div`
  font-size: 15px;
  width: fit-content;
  font-familt:Varela Round;
  ${(props) =>
    props.statsContainer &&
    css`
      background: white;
      color: black;
      border-radius:5px;
      font-size:11px;
    `}
`;
