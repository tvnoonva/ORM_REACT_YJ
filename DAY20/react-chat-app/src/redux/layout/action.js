import { LAYOUT_PROFILE } from "../../constants/actionTypes";

export const layoutProfile = (loginUser) => ({
  type: LAYOUT_PROFILE,
  payload: { loginUser },
});
