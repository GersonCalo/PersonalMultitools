import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<h1>login</h1>} />
        <Route path="/register" element={<h1>register</h1>} />
        <Route path="/tasks" element={<h1>tasks pages</h1>} />
        <Route path="/add-task" element={<h1>add task</h1>} />
        <Route path="/tasks/:id" element={<h1>uodate task</h1>} />
        <Route path="/profile" element={<h1>profile</h1>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App