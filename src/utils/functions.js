import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

export function getCurrentCategory() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { search } = useLocation();
  
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useMemo(() => new URLSearchParams(search), [search]);
  }