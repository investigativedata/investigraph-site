import type { INKDataset, INKCatalog } from "~/lib/ftm/types";
import { API_ENDPOINT } from "~/config";

export async function getCatalog(): Promise<INKCatalog> {
  return await api("catalog");
}

export async function getDataset(dataset: string): Promise<INKDataset> {
  return await api(dataset);
}

async function api(path: string): Promise<any> {
  const url = `${API_ENDPOINT}/${path}`;
  const res = await fetch(url);
  if (!res.ok) {
    const { error } = await res.json();
    console.log(error);
    throw { code: res.status, error };
  }
  return res.json()
}
