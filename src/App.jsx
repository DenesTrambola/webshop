import { Route, Routes } from 'react-router-dom';
import { MainLayout, EmptyLayout } from './layouts';
import { Category, Home, NotFound } from './pages'

const App = () => {
  return (
    <Routes>

      <Route path="/" element={ <MainLayout /> }>
        <Route index element={<Home />}/>
        <Route path='/category/:category' element={<Category />}/>
      </Route>

      <Route element={<EmptyLayout />}>
        <Route path='*' element={<NotFound />} />
      </Route>

    </Routes>
  )
}

export default App;
