import { ChangeEvent, FormEvent } from 'react'
import { Button, TextField } from '@mui/material'

interface SearchFormProps {
  value: string
  onChange: (searchText: string) => void
  onSubmit: () => void
}

export const SearchForm: React.FC<SearchFormProps> = (props) => {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.value)
  }

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    props.onSubmit()
  }
  
  return (
    <form className='flex' onSubmit={handleSearch}>
        <div className='mr-2 w-full'>
          <TextField
            variant='outlined'
            size='small'
            fullWidth
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