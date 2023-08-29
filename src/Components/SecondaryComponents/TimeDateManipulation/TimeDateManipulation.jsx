//convert UnixTimeStamp into a day name
export const convertUnixTimestamp = (timestamp) => {
  const milliseconds = parseInt(timestamp) * 1000;

  // Create a new Date object
  const date = new Date(milliseconds);

  // Get the day of the week as an integer (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const dayOfWeek = date.getUTCDay();

  // Array of day names
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get the day name from the array
  const dayName = days[dayOfWeek];

  return dayName;
};

//convert UnixTimeStamp into a Date Format and filtered the dataList
export const getSelectedDataWithinDateRange = (data) => {
  const currentDateTime = new Date();

  const endDate = new Date(currentDateTime);

  endDate.setDate(endDate.getDate() + 5);

  const selectedData = {};
  if (data) {
    for (const item of data) {
      const dtTimestamp = new Date(item.dt * 1000); // Convert Unix timestamp to milliseconds
      const dtDate = new Date(dtTimestamp.toDateString());

      if (
        currentDateTime <= dtTimestamp &&
        dtTimestamp <= endDate &&
        !(dtDate in selectedData)
      ) {
        selectedData[dtDate + 1] = item;
      }
    }
  }

  return Object.values(selectedData);
};

//convert Unix TimeStamp into HH:mm Format
export const converTimeStampToTime = (timestamp) => {
  const timestampInMilliseconds = timestamp * 1000;

  const date = new Date(timestampInMilliseconds);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
  }).format(date);

  return formattedDate;
};
