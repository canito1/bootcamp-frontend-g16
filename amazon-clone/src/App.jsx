import Home from "./pages/Home";


export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayoutBase />}>
            <Route index element={<Home />} />
            <Route path='/character/:id' element={<Character />} />

            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            
            <Route path='/claudia-abril' element={<ClaudiaAbril />} />
            <Route path='/bryan-urquizo' element={<Urquizo />} />
            <Route path="/franklin-peña" element={<FranklinPeña />} />
            <Route path='/hiroito-sanchez' element={<HiroitoSanchez />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}