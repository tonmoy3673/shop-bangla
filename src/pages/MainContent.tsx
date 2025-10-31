import { useEffect, useState } from "react";
import { useProductContext } from "../context/ProductContext";
import { Tally3 } from "lucide-react";
import axios from "axios";
import type { ProductType } from "../types/products.types";

const MainContent = () => {
  const { searchQuery, selectedCategory, minPrice, maxPrice, keyword } =
    useProductContext();
  const [products, setProducts] = useState<ProductType[] | undefined>(undefined);
  const [filter, setFilter] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const itemsPerPage: number = 10;

  //   =========== fetch products =========//
  useEffect(() => {
    const fetchProduct = async ():Promise<void>=> {
      let url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${
        (currentPage - 1) * itemsPerPage
      }
`;
      if (keyword) {
        url = `https://dummyjson.com/products/search?q=${encodeURIComponent(keyword)}`;
      }
      setLoading(true);
      try {
        const response = await axios.get(url);
        if (!response.data || !response.data.products) {
          console.error("No Product Data Found!");
          setError("URL Error Found!");
        }
        else{
            setProducts(response.data.products);
        }
      } catch (err: unknown) {
        console.error(`Failed to Fetch Product Data ${err}`);
        setError(`Failed to Fetch Product ${err}`);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [itemsPerPage, keyword, currentPage]);

//   ========== getFilteredProduct =========
  const getFilteredProduct=()=>{

  }

  console.log("Products", products);

  return (
    <section className=" lg:w-220 sm:w-160 xs:w-[20rem] p-5">
      MainContent
      <div className="mb-5">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="relative mb-5 mt-5">
            <button className="px-4 py-2 rounded-full flex items-center border">
              {/* ============ filter ========== */}
              <Tally3 className="mr-2" />
              {filter === "all" || !filter
                ? "Filter"
                : filter.charAt(0).toLowerCase() + filter.slice(1)}
            </button>
            {/* =========== dropdown ======== */}
            {dropdownOpen && (
              <div className="absolute bg-white border border-gray-300 rounded mt-2 w-full sm:w-40">
                {/* ======== Cheap button ========= */}
                <button
                  className="block px-4 py-2 w-full text-left hover:bg-gray-200"
                  onClick={() => setFilter("cheap")}
                >
                  Cheap
                </button>
                {/* ============ Expensive button ========== */}
                <button
                  className="block px-4 py-2 w-full text-left hover:bg-gray-200"
                  onClick={() => setFilter("expensive")}
                >
                  Expensive
                </button>
                {/* ============ Popular button =========== */}
                <button
                  className="block px-4 py-2 w-full text-left hover:bg-gray-200"
                  onClick={() => setFilter("popular")}
                >
                  Popular
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ============= card section ========== */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5"></div>
      </div>
    </section>
  );
};

export default MainContent;
