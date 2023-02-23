import ResultBox from "./components/ResultBox"
import Summary from "./components/Summary"
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <div className="card"> 
        <ResultBox />
        
        <Summary />
      </div>
      <Footer />
    </>
  )
}

export default App