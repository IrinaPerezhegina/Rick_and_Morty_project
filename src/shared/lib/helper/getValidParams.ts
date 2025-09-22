import { FilterProps } from '@/shared';

interface ValidParamsProps {
  name?: string;
  gender?: string;
  species?: string;
  status?: string;
  page?: number;
}

export function getValidParams(params: FilterProps): ValidParamsProps {
  const validParams: ValidParamsProps = {};

  if (params.filterStatus) {
    validParams.status = params.filterStatus;
  }
  if (params.genderValue) {
    validParams.gender = params.genderValue;
  }
  if (params.searchValue) {
    validParams.name = params.searchValue;
  }
  if (params.speciesValue) {
    validParams.species = params.speciesValue;
  }
  if (params.page) {
    validParams.page = params.page;
  }
  return validParams;
}
