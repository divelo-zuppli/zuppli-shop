import styled from 'styled-components'
import { color } from '../../variables'

export const AisleContainer = styled.div`
  display: flex;
  background-color: ${color.gray};
  margin-top: 20px;
`

export const ProductsContainer = styled.ul`
  width: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(176px, 1fr));
  padding: 0 16px;
`