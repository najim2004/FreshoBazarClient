// src/hooks/useAppDispatch.ts

import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store"; // Import AppDispatch type

export const useAppDispatch = () => useDispatch<AppDispatch>();
