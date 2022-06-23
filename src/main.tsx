import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'

import {
  ChakraProvider,
  extendTheme
} from "@chakra-ui/react";


const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark"
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>

)
