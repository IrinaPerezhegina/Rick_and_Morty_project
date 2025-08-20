import { memo, useCallback, useState } from "react";
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
  const [readOnly, setReadOnly] = useState(true);
  const onClick = useCallback(() => setReadOnly((prev) => !prev), []);

  return (
    <PageLayout>
      <CharacterWidget
        onClick={onClick}
        readOnly={readOnly}
        character={character}
      />
    </PageLayout>
  );
});
