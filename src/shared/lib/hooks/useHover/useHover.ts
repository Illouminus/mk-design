import { useCallback, useMemo, useState } from 'react'

interface UserHoverBind {
  onMouseEnter: () => void
  onMouseLEave: () => void
}

type UseHoverResult = [boolean, UserHoverBind]

export const useHover = () => {
  const [isHover, setIsHover] = useState(false)
  const onMouseEnter = useCallback(() => {
    setIsHover(true)
  }, [])
  const onMouseLeave = useCallback(() => {
    setIsHover(false)
  }, [])

  return useMemo(() => [
    isHover,
    { onMouseEnter, onMouseLeave }
  ], [isHover, onMouseEnter, onMouseLeave])
}
