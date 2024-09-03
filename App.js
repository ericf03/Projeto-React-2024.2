import React, { useState } from 'react'

import Home from './interfaces/src/views/home.jsx'
import Login from './interfaces/src/views/login.jsx'

export default function App() {
	const [logado, setLogado] = useState(false)

	if (logado) return <Home onLogout={setLogado} />
	return <Login onLogin={setLogado} />
}
