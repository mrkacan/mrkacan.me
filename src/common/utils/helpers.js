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

export const getFormattedIssuedDate = ({
  issuedDate,
  expireDate,
}) => {
  let formattedIssuedDate = moment(issuedDate, 'YYYY-MM-DD');
  let formattedExpireDate = moment(expireDate, 'YYYY-MM-DD');

  if (formattedExpireDate.isValid()) {
    formattedExpireDate = moment(formattedExpireDate).format('MMM YYYY');
  } else {
    formattedExpireDate = 'No Expiration Date';
  }

  if (formattedIssuedDate.isValid()) {
    formattedIssuedDate = moment(formattedIssuedDate).format('MMM YYYY');
  } else {
    formattedIssuedDate = '';
  }

  return `${formattedIssuedDate} - ${formattedExpireDate}`;
};
