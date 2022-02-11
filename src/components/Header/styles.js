import styled from 'styled-components'
import { color, fontWeight } from '../../variables'

export const Container = styled.div`
  display: flex;
  height: 65px;
  background-color: ${color.gray};
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  img {
    max-width: 116px;
  }

  .logo {
    display: flex;
  }

  .right-container {
    display: flex;
  }

  .separator {
    margin: 0 20px;
  }

  .link {
    color: ${color.primary};
    text-decoration: none;
    font-weight: ${fontWeight.regular};
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;

    :hover {
      color: ${color.focus}
    }
  }
`