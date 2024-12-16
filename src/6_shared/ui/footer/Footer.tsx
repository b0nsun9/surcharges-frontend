/* styles */
import styles from './Footer.module.css'

/* frameworks */

/* components */
import { Bonsung } from './bonsung/Bonsung'
import { Petr } from './petr/Petr'

/* usecases */

export function Footer() {
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