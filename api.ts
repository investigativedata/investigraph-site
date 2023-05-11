import { notFound } from "next/navigation";

import Api from "~/lib/ftm/api";

import { API_ENDPOINT } from "~/config";

const api = new Api(API_ENDPOINT);

api.onNotFound = () => notFound();

export default api;
