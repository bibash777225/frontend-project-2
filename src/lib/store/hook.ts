import { useDispatch, useSelector } from "react-redux";
import { AppDispacth, Rootstate } from "./store";
import { Root } from "react-dom/client";
// usedispatch+TYPES == customHook


   export const useAppDispatch=useDispatch.withTypes<AppDispacth>();

   export const useAppSlector =useSelector.withTypes<Rootstate>(); //hami lwy banako rote state chai export garney arkoo hoienah
   
   // export const hahaUseAppSelector : TypedUseSelectorHook<RootState> = useSelector