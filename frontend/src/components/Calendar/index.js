import './index.css';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

const Calendar = () => {
   return (
      <div className='calendar-wrapper'>
         <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
         />
      </div>
   );
}

export default Calendar;