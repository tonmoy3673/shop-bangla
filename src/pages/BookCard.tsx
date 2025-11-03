import type { ProductType } from "../types/products.types";

interface BookCardProps {
  product: ProductType;
}
const BookCard = ({ product }: BookCardProps) => {
  
  console.log("Filtered Products", product);
  return <div>Book Card</div>;
};

export default BookCard;
