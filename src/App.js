import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'

import { Route, Routes, useNavigate } from 'react-router-dom';

import Create from './components/create/Create'
import '../node_modules/react-big-calendar/lib/css/react-big-calendar.css'
import Edit from './components/edit/Edit'
import Details from './components/details/Details'
import { useEffect, useState } from 'react'
import { getAllTasks } from './api/tasks'

// import './App.css';

function App() {
	const [tasks, setTasks] = useState([])
	const navigate = useNavigate();

	useEffect(() => {
		getAllTasks()
			.then(res => {
				setTasks(Object.values(res));
			})
	}, [])

	const locales = {
		'bg-bg': require('date-fns/locale/bg')
	}

	const localizer = dateFnsLocalizer({
		format,
		parse,
		startOfWeek,
		getDay,
		locales
	})


	function onClickHandler(e) {

		if (e.target.className == 'rbc-event-content') {
			console.log(e.target.title);
		}
	}

	return (
		<div className="App" onClick={onClickHandler}>
			<Routes>
				<Route path='/create' element={<Create />} />
				<Route path='/' element={
					<Calendar localizer={localizer}
						events={tasks}
						startAccessor="start"
						endAccessor="end"
						style={{ height: 700, padding: '2rem' }}
					/>} />

				<Route path='/edit/:eventId' element={<Edit />} />
				<Route path='/event/:eventId' element={<Details />} />

			</Routes>
		</div>
	);
}

export default App;
