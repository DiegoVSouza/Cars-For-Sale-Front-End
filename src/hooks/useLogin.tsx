import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { Account } from '../types';
import { useHistory } from 'react-router-dom';

interface LoginProviderProps {
    children: ReactNode;
  }

  interface LoginAccount{
      email: string;
      password: string;
  }

  interface LoginContextData {
    isLogged: Boolean;
    currentUser: Account;
    LoginAccount: (id: number) => Promise<void>;
  }

  const LoginContext = createContext<LoginContextData>({} as LoginContextData);

export function LoginProvider({ children }: LoginProviderProps): JSX.Element {

    const [isLogged, setIsLogged] = useState(false)
    const [currentUser, setCurrentUser] = useState<Account>(() => {
        const storageUser = localStorage.getItem('@ecommerce:user')
    
        if (storageUser) {
          return JSON.parse(storageUser);
        }
    
        return;
      });

    const history = useHistory();

    function concluded(){
        history.push('/home')
    }

    async function LoginAccount(id: number){

       
        const {data: user} = await api.get<Account>(`/accounts/${id}`)
        if(user){
            setCurrentUser(user)
            localStorage.setItem('@ecommerce:user', JSON.stringify(user));
            console.log(user)
            setIsLogged(true)
            concluded()
        }
        
        
    }

    return(
        <LoginContext.Provider
            value={{isLogged, currentUser, LoginAccount}}
        >
            {children}
        </LoginContext.Provider>
    );
}

export function useLogin(): LoginContextData {
    const context = useContext(LoginContext);
  
    return context;
  }