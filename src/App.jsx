import CarouselView from './components/Carousel.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Newsletter from './components/Newsletter.jsx'
import Products from './components/products/Products.jsx'
import { ContextProvider } from './context/ContextProvider.jsx'

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Header/>
        <CarouselView/>
        <Products/>
        <Newsletter/>
        <Footer/>
      </div>
    </ContextProvider>
  )
}

export default App
