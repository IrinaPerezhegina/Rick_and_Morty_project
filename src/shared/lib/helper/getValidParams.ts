import { FilterProps } from '@/entities/Filter';

interface ValidParamsProps {
  name?: string;
  gender?: string;
  species?: string;
  status?: string;
  page?: number;
}

export function getValidParams(params: FilterProps): ValidParamsProps {
  const validParams: ValidParamsProps = {};

  if (params.status) {
    validParams.status = params.status;
  }
  if (params.gender) {
    validParams.gender = params.gender;
  }
  if (params.search) {
    validParams.name = params.search;
  }
  if (params.species) {
    validParams.species = params.species;
  }
  if (params.page) {
    validParams.page = params.page;
  }
  return validParams;
}
