import styled from 'styled-components'
import { color, fontFamily, fontWeight } from '../../variables'

export const CardContainer = styled.li`
  background-color: ${color.white};
  border-radius: 6px;
  overflow: hidden;
  margin: 10px 6px;
  border: 1px solid ${color.gray200};
  transition: transform .2s;
  cursor: pointer;
  position: relative;

  :hover {
    transform: scale(1.03);
  }

  .add-button {
    display: flex;
    align-items: center;
    position: absolute;
    justify-content: center;
    background-color: ${color.secondary};
    border-radius: 50%;
    border: 2px solid white;
    width: 30px;
    height: 30px;
    right: 10px;
    margin-top: -36px;
    transition: background-color .2s, border .2s;

    :hover {
      background-color: ${color.white};
      border: 2px solid ${color.secondary};

      svg {
        fill: ${color.secondary};
      }
    }

    svg {
      transition: fill .2s;
      fill: white;
    }
  }

  img {
    height: 120px;
  }
}
`

export const LegendContainer = styled.div`
  text-align: left;
  padding: 0 10px 30px;

  .price {
    font-weight: ${fontWeight.bold};
    font-family: ${fontFamily.main};
    font-size: 18px;
    margin: 6px 0;
  }

  .title {
    font-weight: ${fontWeight.regular};
    font-family: ${fontFamily.main};
    font-size: 14px;
    margin: 0;
  }

  .package-type {
    font-weight: ${fontWeight.regular};
    font-family: ${fontFamily.main};
    font-size: 14px;
    margin: 4px 0 0;
    font-style: italic;
  }

`