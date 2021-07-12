import ChevronLeft from './svgs/chevron-left.svg'
import ChevronRight from './svgs/chevron-right.svg'
import LogOut from './svgs/logout.svg'
import Quotes from './svgs/quotes.svg'
import Close from './svgs/quotes.svg'

const icons = {
  'chevron-left': <ChevronLeft />,
  'chevron-right': <ChevronRight />,
  logout: <LogOut />,
  quotes: <Quotes />,
  close: <Close />
}

interface IIcons {
  name: 'chevron-left' | 'chevron-right' | 'logout' | 'quotes' | 'close'
}

export default function Icon({ name }: IIcons) {
  return icons[name]
}
