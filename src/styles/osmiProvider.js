import customTheme from './customTheme' // your custom style file
import { OsmiProvider } from 'osmicsx'

const provider = new OsmiProvider(customTheme);

const { apply, connect } = provider;

export {
  apply,
  connect
}
