interface IResource {
  url: string;
  name: string;
  path: string;
  sha1: string;
  timestamp: string;
  dataset: string;
  mime_type: string;
  mime_type_label: string;
  size: number;
  title: string;
}

interface IDatasetPublisher {
  name: string;
  url?: string;
  description?: string;
  official: boolean;
  country?: string;
  country_label?: string;
}

export interface INKDatasetBase {
  name: string;
  title: string;
  summary?: string;
  url?: string;
  category?: string;
  frequency?: string;
}

export interface INKDataset extends INKDatasetBase {
  updated_at: string;
  version: string;
  children: Array<string>;
  publisher?: IDatasetPublisher;
  resources: Array<IResource>;
}

export interface INKCatalog {
  updated_at?: string;
  datasets: Array<INKDataset>;
}
