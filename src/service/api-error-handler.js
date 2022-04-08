export const apiErrorHandler = (error) => {
  const errorData = {
    description: error.message,
  };

  // Check spesifict error
  switch (error.status) {
    case 400:
      errorData.message = 'Enter search keyword';
      break;
    case 401:
      errorData.message = 'Unauthorized';
      break;
    case 403:
      errorData.message = 'Forbidden';
      break;
    case 429:
      errorData.message = 'The app has exceeded its rate limits';
      break;
    default:
      errorData.message = 'Oops something wrong !';
      break;
  }

  return errorData;
};
