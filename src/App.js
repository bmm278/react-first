import Dailypoint from './Dailypoint/Dailypoint'
// import ChangeTab from './components/ChangeTab'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={ <Dailypoint /> }>
    {/* <Route path='/' element={ <ChangeTab /> }> */}
      </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App