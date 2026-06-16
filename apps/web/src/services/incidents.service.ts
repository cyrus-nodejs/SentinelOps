import { api } from './api';

export async function getIncidents() {
  const { data } =
    await api.get('/incidents');

  return data;
}

export async function getIncident(
  id: string,
) {
  const { data } =
    await api.get(
      `/incidents/${id}`,
    );

  return data;
}