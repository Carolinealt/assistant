const parseCompleted = (completed) => {
  const isBoolean = typeof completed === 'boolean';
  if (!isBoolean) return;

  return completed;
};

export const parseFilterParams = (query) => {
  const { completed, text, title } = query;

  const parsedCompleted = parseCompleted(completed);

  return {
    completed: parsedCompleted,
    text,
    title
  };
};
