import { useAuthContext } from "./useAuthContext";
import { useGenContext } from "./useGenContext";
export const useLogout = () => {
    const {dispatch} = useAuthContext();
    const {dispatch:imgContext} = useGenContext();
    const logout = () => {
        localStorage.removeItem('img_gen_usr');
        dispatch({type:"LOGOUT"});
        imgContext({type:"SET_IMGS",payload:[]});
    };
    return {logout};
}