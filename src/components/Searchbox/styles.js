import styled from 'styled-components'
import { color, fontFamily, fontWeight } from '../../variables'

export const SearchContainer = styled.form`
  border-radius: 8px;
  border: solid 1px ${color.gray200};
  background-color: ${color.white};
  width: 50%;
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  align-items: center;
  max-width: 608px;
  :focus-within {
    outline: ${color.focus} solid 2px;
  }
`

export const Search = styled.input`
  padding: 12px;
  width: 100%;
  border: none;
  color: ${color.primary};
  caret-color: ${color.focus};
  text-indent: 8px;
  font-family: ${fontFamily.main};
  font-weight: ${fontWeight.bold};
  :focus {
    outline: none;

    ::placeholder {
      color: ${color.gray200};
    }
  }

  ::placeholder {
    color: ${color.gray600};
  }
  font-size: 14px;
  text-overflow: ellipsis;
`