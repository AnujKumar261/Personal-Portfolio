import React from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { GlobalStyle } from './styles/global'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />

      {/* ✅ ADD THIS (IMPORTANT) */}
      <ToastContainer position="bottom-left" />
    </>
  )
}

export default App