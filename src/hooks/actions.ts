import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { hsActions } from "../store/hearthstone/hs.slice";

const actions = {
  ...hsActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
