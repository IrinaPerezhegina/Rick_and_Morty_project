import { SelectOption } from "@/shared/types/select";

export const optionsStatus: SelectOption[] = [
  { id: "status-1", content: "Alive" },
  { id: "status-2", content: "Dead" },
  { id: "status-3", content: "unknown" },
];

export const optionsView: SelectOption[] = [
  { id: "view-1", content: "Human" },
  { id: "view-2", content: "Alien" },
  { id: "view-3", content: "Humanoid" },
  { id: "view-4", content: "Animal" },
  { id: "view-5", content: "Robot" },
];

export const optionsGender: SelectOption[] = [
  { id: "gender-1", content: "Female" },
  { id: "gender-2", content: "Male" },
  { id: "gender-3", content: "Genderless" },
  { id: "gender-4", content: "Unknown" },
];
