/* styles */
import styles from './Search.module.css'

/* frameworks */
import { useNavigate } from 'react-router-dom'

/* components */
import SearchBox from '@components/searchBox/SearchBox'
import Footer from '@components/footer/Footer'
import { useSearchStore } from './SearchStore'

/* usecases */

export default function Search() {

  const navigate = useNavigate()

  const { searchText, setSearchText } = useSearchStore()

  const handleOnChange = (text: string) => {
    setSearchText(text)
  }
  const handleOnSubmit = () => {
    if (searchText) {
      navigate('/results')
    }
  }

  return (
    <div className={styles.wrapper}>
      <div>
        <p className={styles['service-title']}>Surcharges</p>
        <SearchBox
          value={searchText}
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