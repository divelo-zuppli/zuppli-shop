import styled from 'styled-components'
import { color, fontFamily, fontWeight } from '../../variables'

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 26px;
  svg {
    stroke: ${color.primary};

    :hover {
      stroke: ${color.focus};
    }
  }


  color: ${color.primary};

  :hover {
    color: ${color.focus};
  }

  span {
    font-size: 12px;
    font-family: ${fontFamily.main};
    font-weight: ${fontWeight.regular};
  }

  .number-container {
    border-radius: 50%;
    background-color: ${color.error};
    color: ${color.white};
    min-width: 18px;
    height: 18px;
    padding: 2px;
    font-size: 12px;
    position: absolute;
    margin-left: 16px;
    margin-top: -6px;
    line-height: 1.5;
  }
`