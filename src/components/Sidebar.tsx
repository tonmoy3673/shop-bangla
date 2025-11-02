import { useEffect, useState } from "react";
import { useProductContext } from "../context/ProductContext";

interface Product {
  category: string;
}

interface FetchResponse {
  products: Product[];
}
const SideBar = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [keywords] = useState<string[]>([
    "Apple",
    "Watch",
    "Fashion",
    "Trend",
    "Shoes",
    "Shirt",
  ]);

  const [loading, setLoading] = useState<boolean>(false);
  const {
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
  } = useProductContext();

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data: FetchResponse = await response.json();

        const uniqueCategory = Array.from(
          new Set(data.products.map((product) => product.category))
        );
        console.log(uniqueCategory);
        setCategories(uniqueCategory);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error(`Failed to fetch Categories Data ${err.message}`);
          throw new Error(`Failed to Fetch Categories Data ${err.message}`);
        } else {
          console.error("Unknown Error Found", { err });
          throw new Error("Unknown Error Found!");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  // ======== handlePrice =======//
  const handlePrice = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "min" | "max"
  ) => {
    const PriceValue = e.target.value;
    const value = PriceValue ? parseFloat(PriceValue) : undefined;
    if (type === "min") {
      setMinPrice(value);
    } else {
      setMaxPrice(value);
    }
  };

  // ========= handleRadioCategory =====//
  const handleRadioCategory = (category: string) => {
    setSelectedCategory(category);
  };
  console.log('selectedCategory',selectedCategory);

  // ============ handleKeyword ========//
  const handleKeyWord = (keyword: string) => {
    setKeyword(keyword);
  };

  // ============ resetFilter =======//
  const resetFilter = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setKeyword("");
  };

  return (
    <div className="w-64 p-5 h-screen">
      <h1 className="text-2xl font-bold mb-10 mt-4">React Store</h1>
      <section>
        <input
          placeholder="Search Product..."
          type="text"
          className="border-2 rounded px-2 sm:mb-0"
          value={searchQuery}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchQuery(e.target.value)
          }
        />
        <div className="flex justify-center items-center mt-3 md:mt-4">
          <input
            placeholder="Min"
            type="text"
            className="border-2 mr-2 px-5 mb-3 py-2 w-full"
            value={minPrice ?? ""}
            onChange={(e) => {
              handlePrice(e, "min");
            }}
          />
          <input
            placeholder="Max"
            type="text"
            className="border-2 mr-2 px-5 mb-3 py-2 w-full"
            value={maxPrice ?? ""}
            onChange={(e) => handlePrice(e, "max")}
          />
        </div>
        {/* ============= categories ========= */}
        <div className="mb-2">
          <h2 className="text-xl font-semibold mb-3">Categories</h2>
        </div>
        {/* ========= display categories ========= */}
        <section>
          {categories &&
            categories.map((category, index) => {
              return (
                <label key={index} className="block mb-2">
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    className="mr-2 w-4 h-4"
                    onChange={() => handleRadioCategory(category)}
                    checked={selectedCategory === category}
                  />
                  {category.toUpperCase()}
                </label>
              );
            })}
        </section>
        {/* ============= keywords ====== */}
        <div className="mb-2 md:mb-5 mt-2 md:mt-4">
          <h2 className="text-xl font-semibold mb-3">Keywords</h2>
          <div>
            {keywords.map((keyword, index) => (
              <button
                value={keyword}
                onClick={() => handleKeyWord(keyword)}
                key={index}
                className="block text-base mb-2 px-4 py-2 w-full text-left border rounded hover:bg-gray-200"
              >
                {keyword.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        {/* ============ reset button ======== */}
        <button
          onClick={resetFilter}
          className=" w-full mb-4 py-2 bg-black text-white rounded-md cursor-pointer mt-3 md:mt-5"
        >
          Reset Filters
        </button>
      </section>
    </div>
  );
};
export default SideBar;
