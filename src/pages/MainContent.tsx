import { useProductContext } from "../context/ProductContext";

const MainContent =()=>{
    const {searchQuery,selectedCategory,minPrice,maxPrice,keyword} = useProductContext();
    return (
        <div>MainContent</div>
    )
}

export default MainContent;