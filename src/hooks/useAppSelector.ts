import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer"; // Import RootState type

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
