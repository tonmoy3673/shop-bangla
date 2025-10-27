import { createContext, type ReactNode } from "react";
interface FilterContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  minPrice: number | undefined;
  setMinPrice: (price: number | undefined) => void;
  maxPrice: number | undefined;
  setMaxPrice: (price: number | undefined) => void;
  keyword: string;
  setKeyword: (keyword: string) => void;
};

interface ProductContextProviderProps{
  children : ReactNode;
}

const ProductContext = createContext<FilterContextType | undefined>(undefined);

export const ProductContextProvider:React.FC<ProductContextProviderProps> = ({children})=>{


  return(
    <ProductContext.Provider value={}>
      {children}
    </ProductContext.Provider>
  )
}

