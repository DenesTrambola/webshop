import { Route, Routes } from 'react-router-dom';
import { MainLayout, EmptyLayout } from './layouts';
import { Home, Military, NotFound } from './pages'

const App = () => {
  return (
    <Routes>

      <Route path="/" element={ <MainLayout /> }>
        <Route index element={<Home />}/>
        <Route path='/military' element={<Military />}/>
      </Route>

      <Route element={<EmptyLayout />}>
        <Route path='*' element={<NotFound />} />
      </Route>

    </Routes>
  )
}

export default App;
