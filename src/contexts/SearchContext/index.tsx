import { createContext, useContext, useState } from "react";
import { SearchContextType } from "./types";

interface SearchProviderProps {
    children: React.ReactNode;
}

export const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children } : SearchProviderProps ) => {
  const [searchTerm, setSearchTerm] = useState('');

    return(
        <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
            {children}
        </SearchContext.Provider>
    )
}

export function useSearch(): SearchContextType {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch deve ser usado dentro de um SearchProvider');
    }
    return context;
}