import { FilterProps } from "@/lib/hooks";

interface ValidParamsProps {
  name?: string;
  gender?: string;
  spesies?: string;
  status?: string;
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
    validParams.spesies = params.speciesValue;
  }
  return validParams;
}
