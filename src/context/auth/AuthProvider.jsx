import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { jwtDecode } from "jwt-decode";
import AxiosInstance from "../../axios/AxiosInstance";
export  const AuthProvider = ({ children }) => {
    const access=localStorage.getItem('accessToken')
    const [user, setUser] = useState(null)
    useEffect(() => { 
      const userId=jwtDecode(access)?.user_id
      if(!user){
        var data={
          user:null,
          profil:{user: null, kind: null, bio: '', adress: '', picture: null}
        }
        AxiosInstance.get(`/auth/user-detail/${userId}/`).then(resUser=>{
          data.user=resUser.data;
          AxiosInstance.get(`/auth/profile-user-id-detail/${userId}/`).then(profRes=>{
            data.profil=profRes.data?.user?profRes.data:null  
          }).catch(errProf=>{ })
        }).catch(err=>{}).finally(()=>{
          setUser(data);
        })
      } 
    }, [access,user])
    
    
    return (
      <AuthContext.Provider value={{ user, setUser }}>
        {children}
      </AuthContext.Provider>
    );
  };