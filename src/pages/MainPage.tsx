import { memo, useCallback, useEffect, useState } from "react";

import { getCharacters } from "@/api/getCharacters";
import { Error } from "@/components/Error/Error";
import { Loader } from "@/components/Loader/Loader";
import { Logo } from "@/components/Logo/Logo";
import { PageLayout } from "@/components/PageLayout/PageLayout";
import { useFilters } from "@/lib/hooks";
import { CharactersWrapper, CharacterWidget } from "@/widgets/CharacterWidget";
import { FilterPanelWidget } from "@/widgets/FilterPanelWidget";

export const MainPage = memo(() => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [readOnly, setReadOnly] = useState(true);
  const {
    filter,
    onChangeGender,
    debounceFetchData,
    onChangeSpecies,
    onChangeStatus,
  } = useFilters();

  const onClick = useCallback(() => setReadOnly((prev) => !prev), []);

  useEffect(() => {
    setLoading(true);
    getCharacters(filter)
      .then((data) => {
        setError(null);
        setData(data);
      })
      .catch((error) => {
        setError(error.response.data.error);
      })
      .finally(() => setLoading(false));
  }, [filter, error]);

  return (
    <PageLayout>
      <Logo />
      <FilterPanelWidget
        onChangeGender={onChangeGender}
        onChangeSpecies={onChangeSpecies}
        onChangeStatus={onChangeStatus}
        onChangeSearch={debounceFetchData}
        genderValue={filter.genderValue}
        searchValue={filter.searchValue}
        statusValue={filter.filterStatus}
        speciesValue={filter.speciesValue}
      />
      {loading && <Loader variant="bigLoader" />}
      {!error && !loading && (
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
      )}
      {error && <Error error={error} />}
    </PageLayout>
  );
});
