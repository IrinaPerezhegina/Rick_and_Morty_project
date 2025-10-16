const MIN_LENGTH_NAME = 2;
const MAX_LENGTH_NAME = 20;

export const validateName = (value: string): string | null => {
  if (!value.trim()) {
    return 'Name cannot be empty';
  }
  if (value.length < MIN_LENGTH_NAME) {
    return 'Name must contain at least 2 characters.';
  }
  if (value.length > MAX_LENGTH_NAME) {
    return 'Name must contain a max of 30 characters';
  }
  return null;
};
