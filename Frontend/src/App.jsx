import { Route, Routes } from 'react-router-dom'
import AuthPage from './pages/auth'


function App() {

  return (
    <Routes>
      <Route path="/auth" element={<AuthPage/>} />
    </Routes>
  )
}// just setting up the routes for authpage


export default App
