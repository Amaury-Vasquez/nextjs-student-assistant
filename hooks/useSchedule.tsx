import { SchoolSubject, SchoolSubjectTime } from 'interfaces';

export const useSchedule = () => {
  const weekdays = [
    'Monday',
    'Thursday',
    'Wednesday',
    'Tuesday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const getWeekRange = (subjects: SchoolSubject[]) => {
    let max = 0;
    let min = 7;

    subjects.forEach((sbj) => {
      sbj.hour.forEach((hours) => {
        if (hours.weekday > max) max = hours.weekday;
        if (hours.weekday < min) min = hours.weekday - 1;
      });
    });

    return { max, min };
  };

  const getWeekDays = () => {
    const { min, max } = getWeekRange(subjects);
    return weekdays.slice(min, max);
  };

  const subjects: SchoolSubject[] = [
    {
      name: 'Sistemas operativos',
      shortname: 'SO',
      teacher: 'Jose Alfredo Jimenez',
      hour: [
        { weekday: 1, starts: '15:00', ends: '16:30' },
        { weekday: 4, starts: '15:00', ends: '16:30' },
        { weekday: 5, starts: '16:30', ends: '18:00' },
      ],
    },
    {
      name: 'Tecnologías para el desarrollo de aplicaciones web',
      shortname: 'Diseño Web',

      teacher: 'Edgardo Adrian Franco',
      hour: [
        { weekday: 1, starts: '08:30', ends: '10:00' },
        { weekday: 4, starts: '08:30', ends: '10:00' },
        { weekday: 5, starts: '08:30', ends: '10:00' },
      ],
    },
    {
      name: 'Electronica analogica',
      shortname: 'Analogica',
      teacher: 'Jose Alfredo Jimenez',
      hour: [
        { weekday: 1, starts: '16:30', ends: '18:00' },
        { weekday: 4, starts: '16:30', ends: '18:00' },
        { weekday: 5, starts: '18:30', ends: '20:00' },
      ],
    },
    {
      name: 'Sistemas operativos',
      shortname: 'SO',
      teacher: 'Jose Alfredo Jimenez',
      hour: [
        { weekday: 1, starts: '15:00', ends: '16:30' },
        { weekday: 4, starts: '15:00', ends: '16:30' },
        { weekday: 5, starts: '16:30', ends: '18:00' },
      ],
    },
    {
      name: 'Tecnologías para el desarrollo de aplicaciones web',
      shortname: 'Diseño Web',

      teacher: 'Edgardo Adrian Franco',
      hour: [
        { weekday: 1, starts: '08:30', ends: '10:00' },
        { weekday: 4, starts: '08:30', ends: '10:00' },
        { weekday: 5, starts: '08:30', ends: '10:00' },
      ],
    },
    {
      name: 'Electronica analogica',
      shortname: 'Analogica',
      teacher: 'Jose Alfredo Jimenez',
      hour: [
        { weekday: 1, starts: '16:30', ends: '18:00' },
        { weekday: 4, starts: '16:30', ends: '18:00' },
        { weekday: 5, starts: '18:30', ends: '20:00' },
      ],
    },
  ];

  return { subjects, getWeekDays, getWeekRange };
};
