import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'

import Create from './components/create/Create'
import '../node_modules/react-big-calendar/lib/css/react-big-calendar.css'
import Edit from './components/edit/Edit'
import Details from './components/details/Details'
import { useEffect, useState } from 'react'
import { getAllTasks } from './api/tasks'

// import './App.css';

function App() {
	const [tasks, setTasks] = useState([]);
	const [action, setAction] = useState('create');
	const [selected, setSelected] = useState({})

	useEffect(() => {
		getAllTasks()
			.then(res => {
				setTasks(Object.values(res));
			})
	}, [action])

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
			const currentTask = tasks.find(t => t.title === e.target.title);
			setSelected(currentTask);
			setAction('details');
		}
	}

	return (
		<div className="App" onClick={onClickHandler}>
			{action === 'create' && <Create setTasks={setTasks}/>}
			{action === 'edit' && <Edit taskId={selected._id} setAction={setAction} />}
			{action === 'details' && <Details task={selected} setAction={setAction} />}

			<Calendar localizer={localizer}
				events={tasks}
				startAccessor="start"
				endAccessor="end"
				style={{ height: 700, padding: '2rem' }}
			/>

		</div>
	);
}

export default App;
