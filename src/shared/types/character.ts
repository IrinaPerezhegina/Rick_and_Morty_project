export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  location: {
    name: string;
    url: string;
  };
  image: string;
  createds: string;
  episode: string[];
  origin: {
    name: string;
    url: string;
  };
  type: string;
}
