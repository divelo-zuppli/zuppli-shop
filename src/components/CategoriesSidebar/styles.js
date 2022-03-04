import styled from 'styled-components'
import { color, fontWeight } from '../../variables'

export const CategoriesContainer = styled.div`
  width: 100%;
  max-width: 24%;
  background-color: ${color.white};
  padding-top: 24px;

  .item {
    text-decoration: none;

    :hover {
      p {
        color: ${color.secondary};
        cursor: pointer;
        font-weight: ${fontWeight.bold};
      } 
    }

    .active {
      color: ${color.secondary};
      font-weight: ${fontWeight.bold};
    }

    p {
      padding: 10px 28px;
      margin: 0;
      color:  ${color.black};
      font-size: 14px;
      text-align: left;
    }
  }
`