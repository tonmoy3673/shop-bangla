import { useState } from "react";
import { useProductContext } from "../context/ProductContext";
import { Tally3 } from "lucide-react";

const MainContent = () => {
  const { searchQuery, selectedCategory, minPrice, maxPrice, keyword } =
    useProductContext();
  const [products, setProducts] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const itemsPerPage: number = 12;

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
              <div className="absolute bg-white border-gray-300 rounded mt-2 w-full sm:w-40">
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
      </div>
    </section>
  );
};

export default MainContent;
