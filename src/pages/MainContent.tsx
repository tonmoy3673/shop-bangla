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
        <section className=" lg:w-220 sm:w-160 xs:w-[20rem] p-5">MainContent
        <div className="mb-5">
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="relative mb-5 mt-5">
                    <button className="px-4 py-2 rounded-full flex items-center border"></button>
                </div>
            </div>
        </div>
        
        </section>
    ) 
}

export default MainContent;