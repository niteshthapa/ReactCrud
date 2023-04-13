import { ALERT_MESSAGE } from "../Types";
export const Alertfn = (obj) => {
      return {
            type: ALERT_MESSAGE,
            payload: obj
      }
}
