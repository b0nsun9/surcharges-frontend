/* styles */
import styles from './Search.module.css'

/* frameworks */
import { useNavigate } from 'react-router-dom'

/* components */
import SearchBox from '@shared/ui/searchbox/SearchBox'
import Footer from '@shared/ui/footer/Footer'

import { useSearchStore } from '@shared/model/SearchStore'

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