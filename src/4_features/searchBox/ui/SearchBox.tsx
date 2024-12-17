import { useNavigate } from "react-router-dom"
import { useState } from "react"

import { SearchForm } from "@shared/ui"

interface SearchBoxProps {
  text: string
  replace: boolean
}

export function SearchBox({ text, replace }: SearchBoxProps) {

  const navigate = useNavigate()

  const [searchText, setSearchText] = useState(text)

  const handleOnChange = (text: string) => {
    setSearchText(text)
  }

  const handleOnSubmit = () => {
    if (searchText) {
      navigate(`/${searchText}`, { replace: replace })
    }
  }

  return (
    <SearchForm
      value={searchText}
      onChange={handleOnChange}
      onSubmit={handleOnSubmit}
    />
  )
}