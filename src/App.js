import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'

import Create from './create/Create'
import '../node_modules/react-big-calendar/lib/css/react-big-calendar.css'

// import './App.css';

function App() {

  
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


  const events = [
    {
      title: 'meeting',
      start: "2022-08-27",
      end: new Date(),
      allDay: false,
      time: '16:00'
    },
    {
      title: 'meeting',
      start: new Date(),
      end: new Date(),
      allDay: true
    }, {
      title: 'meeting',
      start: new Date(),
      end: new Date(),
      allDay: true
    }
  ]

  function onClickHandler(e) {
   if(e.target.className=='rbc-event-content'){

   }
  }

  return (
    <div className="App"  onClick={onClickHandler}>
      <Create />
      <Calendar localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 700, padding: '2rem' }}
        />
    </div>
  );
}

export default App;
