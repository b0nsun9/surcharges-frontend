/* styles */
import styles from './Search.module.css'

/* frameworks */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

/* components */
import SearchBox from '@components/searchBox/SearchBox'
import Footer from '@components/footer/Footer'

/* usecases */

export default function Search() {

  const [searchText, setSearchText] = useState('')
  const navigate = useNavigate()

  const handleOnChange = (text: string) => {
    setSearchText(text)
  }
  const handleOnSubmit = () => {
    if (searchText) {
      navigate('/results', {state: {searchText: searchText}})
    }
  }

  return (
    <div className={styles.wrapper}>
      <div>
        <p className={styles['service-title']}>Surcharges</p>
        <SearchBox
          placeHolder=''
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
        />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}