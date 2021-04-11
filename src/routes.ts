import { ROUTES } from "./constants";
import { IRoute } from "./type";

const routes: IRoute[] = [
  {
    id: ROUTES.CONFIG.ID,
    path: ROUTES.CONFIG.PATH,
    name: ROUTES.CONFIG.NAME,
  },
  {
    id: ROUTES.RESULT.ID,
    path: ROUTES.RESULT.PATH,
    name: ROUTES.RESULT.NAME,
  },
];

export default routes;
