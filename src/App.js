import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
// import bg from 'date-fns/locale/bg-bg'
import './App.css';
import bg from 'date-fns/locale/bg'


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

  const events = [{
    title: 'meeting',
    start: new Date(22, 8, 0)
  }]

  return (
    <div className="App">
      <Calendar localizer={localizer} events={events} />
    </div>
  );
}

export default App;
