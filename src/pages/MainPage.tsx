import { memo, useCallback, useEffect, useState } from "react";

import { getCharacters } from "../api/getCharacters";
import { Loader } from "../components/Loader/Loader";
import { Logo } from "../components/Logo/Logo";
import { PageLayout } from "../components/PageLayout/PageLayout";
import { useFilters } from "../lib/hooks/useFilters";
import { CharacterWidget } from "../widgets/CharacterWidget/CharacterWidget";
import { CharactersWrapper } from "../widgets/CharacterWidget/components/CharactersWrapper/CharactersWrapper";
import { FilterPanelWidget } from "../widgets/FilterPanelWidget/FilterPanelWidget";

export const MainPage = memo(() => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [readOnly, setReadOnly] = useState(true);
  const {
    filter,
    onChangeGender,
    onChangeSearch,
    onChangeSpecies,
    onChangeStatus,
  } = useFilters();

  const onClick = useCallback(() => setReadOnly((prev) => !prev), []);

  useEffect(() => {
    setLoading(true);
    getCharacters()
      .then((data) => {
        setData(data);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <PageLayout>
      <Logo />
      {loading ? (
        <Loader variant="bigLoader" />
      ) : (
        <>
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
          <CharactersWrapper>
            {data.map((character, i) => (
              <CharacterWidget
                key={i}
                onClick={onClick}
                readOnly={readOnly}
                character={character}
              />
            ))}
          </CharactersWrapper>
        </>
      )}
    </PageLayout>
  );
});
