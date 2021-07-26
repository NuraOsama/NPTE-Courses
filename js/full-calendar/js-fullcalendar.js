(function ($) {

   
  document.addEventListener('DOMContentLoaded', function() {
    var initialLocaleCode = 'en';
    var localeSelectorEl = document.querySelector('.locale-selector');
    var calendarEl = document.querySelector('.calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
      },
      initialDate: '2021-04-27',
      locale: initialLocaleCode,
      buttonIcons: false, // show the prev/next text
      weekNumbers: true,
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      dayMaxEvents: true, // allow "more" link when too many events
      events: [
        {
          title: 'All Day Event',
          start: '2021-04-27'
        },
        {
          title: 'Long Event',
          start: '2021-04-30',
          end: '2021-05-1'
        },
        {
          groupId: 999,
          title: 'Repeating Event',
          start: '2021-05-02T16:00:00'
        },
        {
          groupId: 999,
          title: 'Repeating Event',
          start: '2021-05-20T16:00:00'
        },
        {
          title: 'Conference',
          start: '2021-05-30',
          end: '2021-06-6'
        },
        {
          title: 'Meeting',
          start: '2020-09-12T10:30:00',
          end: '2020-09-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2021-05-14T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2021-05-14T14:30:00'
        },
        {
          title: 'Happy Hour',
          start: '2021-05-14T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2021-05-14T20:00:00'
        },
        {
          title: 'Birthday Party',
          start: '2021-06-01T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2021-05-28'
        }
      ]
    });

    calendar.render();

    // build the locale selector's options
    calendar.getAvailableLocaleCodes().forEach(function(localeCode) {
      var optionEl = document.createElement('option');
      optionEl.value = localeCode;
      optionEl.selected = localeCode == initialLocaleCode;
      optionEl.innerText = localeCode;
      localeSelectorEl.appendChild(optionEl);
    });

    // when the selected option changes, dynamically change the calendar option
    localeSelectorEl.addEventListener('change', function() {
      if (this.value) {
        calendar.setOption('locale', this.value);
      }
    });

  });



})(jQuery);




