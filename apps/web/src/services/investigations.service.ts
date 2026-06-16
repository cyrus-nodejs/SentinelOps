import { api } from './api';

export async function getInvestigation(
  id: string,
) {
  const { data } =
    await api.get(
      `/investigations/${id}`,
    );

  return data;
}