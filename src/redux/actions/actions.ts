import { PostDispatchTypes } from "./posts/asyncActions";
import { UserActionTypes } from "./users/asyncActions";

export type AppActions = UserActionTypes | PostDispatchTypes;