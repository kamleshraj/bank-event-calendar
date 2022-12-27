import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
//import timeGridPlugin from "@fullcalendar/timegrid";
import "@fullcalendar/daygrid/main.css";

//implementing the react-bootstrap
import "bootstrap/dist/css/bootstrap.css";
import { Modal, Button, Form } from "react-bootstrap";

import events from "./events";
import AddEventModal from "./AddEventModal";

const MainEventCalendar = () => {
    return (
        <div className="event-calendar-main m-auto p-lg-3 mt-lg-3 bg-white shadow">
        <FullCalendar
            defaultView="dayGridMonth"
            themeSystem="Simplex"
            header={{
            left: "prev,next",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay"
            }}
            plugins={[dayGridPlugin]}
            events={events}
            eventColor={"#" + Math.floor(Math.random() * 16777215).toString(16)}

            eventClick={
                function(arg){
                    alert(arg.event.title)
                }
            }
            
            />
            <AddEventModal/>
        </div>
    )
}

export default MainEventCalendar