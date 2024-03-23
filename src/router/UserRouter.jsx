import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import Home from '../page/Home'

function UserRouter() {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
    </Routes>
  )
}

export default UserRouter