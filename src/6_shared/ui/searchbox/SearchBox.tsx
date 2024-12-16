import { ChangeEvent, FormEvent } from 'react'
import { Button, TextField } from '@mui/material'

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
    <form className='flex' onSubmit={handleSearch}>
        <div className='mr-2'>
          <TextField
            variant='outlined'
            size='small'
            value={props.value}
            onChange={handleChange}
          >
          </TextField>
        </div>
        <div className='ml-2'>
          <Button
            type='submit'
            variant='contained'
          >
            Search
          </Button>
        </div>
      </form>
  )
}