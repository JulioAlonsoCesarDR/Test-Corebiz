import CarouselView from './components/Carousel.jsx'
import Header from './components/Header.jsx'
import Products from './components/products/Products.jsx'
import { ContextProvider } from './context/ContextProvider.jsx'

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Header/>
        <CarouselView/>
        <Products/>
      </div>
    </ContextProvider>
  )
}

export default App
