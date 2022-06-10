import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { Account } from '../types';
import { useHistory } from 'react-router-dom';

interface LoginProviderProps {
    children: ReactNode;
  }

  interface LoginContextData {
    isLogged: Boolean;
    currentUser: Account;
    LoginAccount: (id: number) => Promise<void>;
    LoggoutAccount: () => void;
  }

  const LoginContext = createContext<LoginContextData>({} as LoginContextData);

export function LoginProvider({ children }: LoginProviderProps): JSX.Element {

    const [isLogged, setIsLogged] = useState(()=>{
        const userislogged = localStorage.getItem('@ecommerce:userislogged')
        if (userislogged) {
            return JSON.parse(userislogged);
          }
      
          return false;
        });
    const [currentUser, setCurrentUser] = useState<Account>(() => {

        const storageUser = localStorage.getItem('@ecommerce:user')

        if (storageUser) {
          return JSON.parse(storageUser);
        }
    
        return;
      });

    const history = useHistory();

    function concluded(){
        history.push('/')
    }

    async function LoginAccount(id: number){

        const {data: user} = await api.get<Account>(`/accounts/${id}`)
        if(user){
            setCurrentUser(user)
            localStorage.setItem('@ecommerce:user', JSON.stringify(user));
            
            setIsLogged(true)
            localStorage.setItem('@ecommerce:userislogged', JSON.stringify(true));
            concluded()
        }       
    }

    function LoggoutAccount(){
        setCurrentUser({
            id: 0,
            name: '',
            email: '',
            password: ''})
        
        localStorage.setItem('@ecommerce:user', '')
        setIsLogged(false)

        setIsLogged(false)
        localStorage.setItem('@ecommerce:userislogged', JSON.stringify(false));

    }

    return(
        <LoginContext.Provider
            value={{isLogged, currentUser, LoginAccount, LoggoutAccount}}
        >
            {children}
        </LoginContext.Provider>
    );
}

export function useLogin(): LoginContextData {
    const context = useContext(LoginContext);
  
    return context;
  }