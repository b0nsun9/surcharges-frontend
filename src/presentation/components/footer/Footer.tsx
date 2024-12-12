/* styles */
import styles from './Footer.module.css'

/* frameworks */

/* components */
import Bonsung from '@components/footer/bonsung/Bonsung'
import Petr from '@components/footer/petr/Petr'

/* usecases */

export default function Footer() {
  return (
    <div className={styles.contributers}>
      <footer>
        <p>Made with ❤️ in Wellington</p>
        <Bonsung />
        <Petr />
      </footer>
    </div>
  )
}