import { createContext, useState, type ReactNode } from "react";


interface FilterContextType{
    searchQuery : string;
    setSearchQuery : (query : string)=>void;
    selectedCategory : string;
    setSelectedCategory : (category : string) => void;
    minPrice : number | undefined;
    setMinPrice : (price : number | undefined)=>void;
    maxPrice : number | undefined;
    setMaxPrice : (price : number | undefined) => void;
    keyword : string;
    setKeyword : (keyword:string)=>void;
};

interface ProductContextProvideProps{
    children: ReactNode
}

const ProductContext = createContext<FilterContextType | undefined>(undefined);

export const ProductContextProvide : React.FC<ProductContextProvideProps> = ({children})=>{

    const [searchQuery,setSearchQuery] = useState<string>('');
    const [selectedCategory,setSelectedCategory] = useState<string>('');
    const [minPrice,setMinPrice] = useState<number | undefined>();
    const [maxPrice,setMaxPrice] = useState<number | undefined>();
    const [keyword,setKeyword] = useState<string>('');
    return(
        <ProductContext.Provider value={{}}>
            {children}
        </ProductContext.Provider>
    )
}
