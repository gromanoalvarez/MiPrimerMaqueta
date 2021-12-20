document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid'],
      locale: 'es',
      events: [
            {
                title: 'Curso de HTML',
                start: '2021-07-01',
                end:'2021-07-14'
            },
            {
                title: 'Curso de CSS',
                start: '2021-07-14',
                end:'2021-07-28'
            },
            {
                title: 'Curso de js',
                start: '2021-07-21',
                end:'2021-08-21'
            }
        ]
    }); 

    calendar.render();
  });