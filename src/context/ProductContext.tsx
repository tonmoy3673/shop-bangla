import { createContext, useContext, useState, type ReactNode } from "react";
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
}

interface ProductContextProviderProps {
  children: ReactNode;
}

const ProductContext = createContext<FilterContextType | undefined>(undefined);

export const ProductContextProvider: React.FC<ProductContextProviderProps> = ({
  children,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [keyword, setKeyword] = useState<string>("");
  return (
    <ProductContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        keyword,
        setKeyword,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};


export const useProductContext = ():FilterContextType =>{
    const context =  useContext(ProductContext);
    if (!context) throw new Error('No Product Context Found!');
    return context;
}