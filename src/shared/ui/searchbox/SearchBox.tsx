/* styles */
import styles from './SearchBox.module.css'

/* frameworks */
import React, { ChangeEvent, FormEvent } from 'react'

/* components */

/* usecases */

interface SearchBoxProps {
  value: string
  onChange: (searchText: string) => void
  onSubmit: () => void
}

const SearchBox: React.FC<SearchBoxProps> = (props) => {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
        value={props.value}
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