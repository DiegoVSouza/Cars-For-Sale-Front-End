import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { Cars } from '../types';

interface ModalProviderProps {
  children: ReactNode;
}

interface CarsFormatted extends Cars{
  priceFormatted: string;
}

interface ModalContextData {
  isOpen: boolean;
  handleModal: (isopen: boolean) => void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export function ModalProvider({ children }: ModalProviderProps): JSX.Element {

  const [isOpen, setIsOpen] = useState(false)

  function handleModal(isopen: boolean){
    
    setIsOpen(isopen)
    
  }

    
  return (
    <ModalContext.Provider
      value={{ isOpen, handleModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal(): ModalContextData {
  const context = useContext(ModalContext);

  return context;
}
