import { ConnectedRouter } from 'connected-next-router'
import { wrapper } from '../ducks/store'

import '../styles/antd.less'

function MyApp({ Component, pageProps, router }) {
  return (
    <ConnectedRouter>
    <Component {...pageProps} router={router} />
    </ConnectedRouter>
  )
}

export default wrapper.withRedux(MyApp)
