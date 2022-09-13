import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { Cars } from '../types';

interface UploadProviderProps {
  children: ReactNode;
}


interface UploadContextData {
  handleUpload: (data: File[], plate: string) => void;
}

const UploadContext = createContext<UploadContextData>({} as UploadContextData);

export function UploadProvider({ children }: UploadProviderProps): JSX.Element {


  function handleUpload(data: File[],plate: string){
    console.log(data,plate)
    
  }

    
  return (
    <UploadContext.Provider
      value={{ handleUpload }}
    >
      {children}
    </UploadContext.Provider>
  );
}

export function useModal(): UploadContextData {
  const context = useContext(UploadContext);

  return context;
}
