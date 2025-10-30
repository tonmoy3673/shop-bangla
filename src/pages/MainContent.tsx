import { useState } from "react";
import { useProductContext } from "../context/ProductContext";

const MainContent =()=>{
    const {searchQuery,selectedCategory,minPrice,maxPrice,keyword} = useProductContext();
    const [products,setProducts] = useState<any[]>([]);
    const [filter,setFilter] = useState<string>('');
    const [currentPage,setCurrentPage] = useState<number>(1);
    const [dropdownOpen,setDropdownOpen] = useState<boolean>(false);
    const itemsPerPage: number =12;

    return (
        <div>MainContent</div>
    )
}

export default MainContent;