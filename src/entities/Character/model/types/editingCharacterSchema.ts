export interface editingCharacterSchema {
  id: number | null;
  name: string;
  location: string;
  status: string;
  readOnly: boolean;
  error: string | null;
}
