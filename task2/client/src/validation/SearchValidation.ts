const validateSearch = (query: string) => {
  if (query.match(/[^a-zA-Z]$/g)) {
    return "Search query cannot contain symbols or numbers";
  }
  if (query.length > 20) {
    return "Searcg can contain max characters 20 ";
  }
  return undefined;
};

export const validate = (
  type: string | undefined,
  query: string,
  func: (error: any) => void
) => {
  let error = undefined;
  switch (type) {
    case "search":
      error = validateSearch(query);
      break;

    default:
      return undefined;
  }
  func(error);
  return !error;
};
