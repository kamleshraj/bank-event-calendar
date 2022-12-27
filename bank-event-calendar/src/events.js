//https://codesandbox.io/s/affectionate-field-uexf7j?file=/src/App.js
const events = [
  {title: "Christmas", start: getDate("YEAR-MONTH-25")},  
  {title: "Rendezvous",      start: getDate("YEAR-MONTH-15")    },
    { title: "New Year's Day", start: getDate("2019-01-01") },
    {
      title: "Makar Sankranti",
      start: getDate("2019-01-14")
    },
    {
      title: "Republic Day",
      start: getDate("2019-01-26")
    },
    {
      title: "Basant Panchami",
      start: getDate("2019-02-10")
    },
    {
      title: "Shivaji Jayanti and Guru Ravidas' Birthday",
      start: getDate("2019-02-19")
    },
    {
      title: "Maharshi Dayanand Saraswati Jayanti",
      start: getDate("2019-02-28")
    },
    {
      title: "Maharshi Dayanand Saraswati Jayanti",
      start: getDate("2019-02-28")
    },
    {
      title: "Maharshi Dayanand Saraswati Jayanti",
      start: getDate("2019-02-28")
  },
    {
      title: "Maha Shivaratri",
      start: getDate("2019-03-04")
  },
  {
    title: "Holi",
    start: getDate("2019-03-21")
  },
  {
    title: "Gudi Padwa",
    start: getDate("2019-04-06")
  },
  {
    title: "Good Friday",
    start: getDate("2019-04-19")
  },
  {
    title: "Easter Sunday",
    start: getDate("2019-04-21")
  },
  {
    title: "Guru Rabindranath Jayanti",
    start: getDate("2019-05-09")
  },
  {
    title: "Idul Fitr",
    start: getDate("2019-06-05")
  },
  {
    title: " Ratha Yatra ",
    start: getDate("2019-07-04")
  },
  {
    title: "Bakrid ",
    start: getDate("2019-08-12")
  },
  {
    title: "Independence Day",
    start: getDate("2019-08-15")
  },
  {
    title: "Teej ",
    start: getDate("2019-09-01")
  },

  {
    title: "Gandhi Jayanti ",
    start: getDate("2019-10-02")
  },
  {
    title: "Eid-e-Milad",
    start: getDate("2019-11-10")
  },
  {
    title: "Christmas Day",
    start: getDate("2019-12-25")
  }
  ];
  
  function getDate(dayString) {
    const today = new Date();
    const year = today.getFullYear().toString();
    let month = (today.getMonth() + 1).toString();
  
    if (month.length === 1) {
      month = "0" + month;
    }
  
    return dayString.replace("YEAR", year).replace("MONTH", month);
  }
  
  export default events;
  