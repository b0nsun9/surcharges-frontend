/* styles */
import styles from './SearchBox.module.css'

/* frameworks */
import React, { useState, ChangeEvent, FormEvent } from 'react'

/* components */

/* usecases */

interface SearchBoxProps {
  placeHolder: string
  onChange: (searchText: string) => void
  onSubmit: () => void
}

const SearchBox: React.FC<SearchBoxProps> = (props) => {

  const [searchText, setSearchText] = useState(props.placeHolder)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
    props.onChange(event.target.value)
  }

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    props.onSubmit()
  }
  return (
    <form onSubmit={handleSearch}>
      <input
        className={styles.input}
        type="text"
        value={searchText}
        onChange={handleChange}
      />
      <button
        className={styles.button}
        type="submit"
      >Search</button>
    </form>
  )
}

export default SearchBox