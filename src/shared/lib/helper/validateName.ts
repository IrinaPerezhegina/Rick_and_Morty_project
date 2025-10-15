export const validateName = (value: string): string | null => {
  if (!value.trim()) {
    return 'Name cannot be empty';
  }
  if (value.length < 2) {
    return 'Name must contain at least 2 characters.';
  }
  if (value.length > 20) {
    return 'Name must contain a max of 30 characters';
  }
  return null;
};
