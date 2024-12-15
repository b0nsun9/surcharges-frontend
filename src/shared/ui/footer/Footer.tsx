/* styles */
import styles from './Footer.module.css'

/* frameworks */

/* components */
import Bonsung from '@shared/ui/footer/bonsung/Bonsung'
import Petr from '@shared/ui/footer/petr/Petr'

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