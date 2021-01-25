import moment from 'moment';

export const getFormattedDateRange = ({
  startedDate,
  endDate,
}) => {
  let formattedStartDate = moment(startedDate, 'YYYY-MM-DD');
  let formattedEndDate = moment(endDate, 'YYYY-MM-DD');

  if (formattedEndDate.isValid()) {
    formattedEndDate = moment(formattedEndDate).format('MMM YYYY');
  } else {
    formattedEndDate = 'Present';
  }

  if (formattedStartDate.isValid()) {
    formattedStartDate = moment(formattedStartDate).format('MMM YYYY');
  } else {
    formattedStartDate = '';
  }

  return `${formattedStartDate} - ${formattedEndDate}`;
};
