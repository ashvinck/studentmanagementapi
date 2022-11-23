import React from 'react';
import "./Calendar.css";
import { myevents } from "./Calendardata";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";


const locales = {
    "en-US": require("date-fns")
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
});

// Big Calendar NPM 
//Maps data from Calendar data Array 

export const MyCalendar = () => {
    return (
        <div className="calendar">
            <h1 className="event">Calendar</h1>
            <Calendar
                events={myevents}
                localizer={localizer}
                defaultDate={new Date()}
                style={{ height: 500 }}
            />
        </div>
    )
}