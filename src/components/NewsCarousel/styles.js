import styled from "styled-components";
import { color, fontWeight } from "../../variables";

export const CarouselContainer = styled.div`
  button {
    background-color: transparent;
    border: 0;
  }
`

export const Card = styled.div`
  width: 400px;
  height: 120px;
  border-radius: 8px;
  background-color: ${props => props.color ? props.color : color.gray};
  margin: 20px 10px;
  display: flex;
  box-shadow: ${color.gray} 0px 2px 6px 2px;

  img {
    width: 28%;
    object-fit: cover;
  }

  div {
    text-align: left;
    font-size: 18px;
    align-self: center;
    padding: 20px;
    .title {
      font-weight: ${fontWeight.bold};
      color: ${color.black};
      margin: 6px 0 8px 0;
    }
    .description {
      font-weight: ${fontWeight.regular};
      font-size: 14px;
      color: ${color.focus};
      margin: 8px 0 6px 0;
    }
  }
`
