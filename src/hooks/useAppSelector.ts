import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../redux/root.reducer"; // Import RootState type

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
