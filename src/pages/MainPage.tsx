import { memo, useCallback, useState } from "react";
import { Logo } from "../components/Logo/Logo";
import { PageLayout } from "../components/PageLayout/PageLayout";
import { useFilters } from "../lib/hooks/useFilters";
import { CharacterWidget } from "../widgets/CharacterWidget/CharacterWidget";
import { FilterPanelWidget } from "../widgets/FilterPanelWidget/FilterPanelWidget";

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
  const {
    filter,
    onChangeGender,
    onChangeSearch,
    onChangeSpecies,
    onChangeStatus,
  } = useFilters();

  const onClick = useCallback(() => setReadOnly((prev) => !prev), []);

  return (
    <PageLayout>
      <Logo />
      <FilterPanelWidget
        onChangeGender={onChangeGender}
        onChangeSpecies={onChangeSpecies}
        onChangeStatus={onChangeStatus}
        onChangeSearch={onChangeSearch}
        genderValue={filter.genderValue}
        searchValue={filter.searchValue}
        statusValue={filter.filterStatus}
        speciesValue={filter.speciesValue}
      />
      <CharacterWidget
        onClick={onClick}
        readOnly={readOnly}
        character={character}
      />
    </PageLayout>
  );
});
