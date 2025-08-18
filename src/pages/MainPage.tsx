import { memo, useState } from "react";
import { PageLayout } from "../components/PageLayout/PageLayout";
import { CharacterWidget } from "../widgets/CharacterWidget/CharacterWidget";

const character = {
  id: 2,
  name: "Morty Smith",
  status: "Alive",
  species: "Human",
  gender: "Male",
  location: {
    name: "Citadel of Ricks",
    url: "https://rickandmortyapi.com/api/location/3",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
};

export const MainPage = memo(() => {
  const [readOnly, setReadOnly] = useState(false);
  return (
    <PageLayout>
      <CharacterWidget
        onClick={() => setReadOnly((prev) => !prev)}
        readOnly={readOnly}
        character={character}
      />
    </PageLayout>
  );
});
