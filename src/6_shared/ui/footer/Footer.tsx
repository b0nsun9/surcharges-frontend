import { Bonsung } from './bonsung/Bonsung'
import { Petr } from './petr/Petr'

export function Footer() {
  return (
    <div className='mt-10 mb-10'>
      <footer className='flex flex-col items-center justify-center'>
        <p>Made with ❤️ in Wellington</p>
        <Bonsung />
        <Petr />
        <div className='mt-10'>
          <p>v{__APP_VERSION__}({__GIT_COMMIT_HASH__})</p>
        </div>
      </footer>
    </div>
  )
}