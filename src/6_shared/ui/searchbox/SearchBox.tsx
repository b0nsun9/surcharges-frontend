/* styles */
import { Button, TextField } from '@mui/material'
import styles from './SearchBox.module.css'

/* frameworks */
import { ChangeEvent, FormEvent } from 'react'

/* components */

/* usecases */

interface SearchBoxProps {
  value: string
  onChange: (searchText: string) => void
  onSubmit: () => void
}

export const SearchBox: React.FC<SearchBoxProps> = (props) => {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.value)
  }

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    props.onSubmit()
  }
  return (
    <form onSubmit={handleSearch}>
      <TextField
        variant='outlined'
        size='small'
        value={props.value}
        onChange={handleChange}
      >
      </TextField>
      <Button
        type='submit'
        variant='contained'
      >
        Search
      </Button>
    </form>
  )
}