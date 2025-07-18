import { Link } from "react-router-dom";
import { formatCategoryName } from "../utils/formatCategoryName";
import luxury1 from '../assets/product image 13.jpg'; 
import luxury2 from '../assets/product image 14.jpg'; 
import luxury3 from '../assets/product image 15.jpg'; 
import luxury4 from '../assets/product image 16.jpg'; 
import luxury5 from '../assets/product image 17.jpg'; 
import luxury6 from '../assets/product image 18.jpg';

const ProductItem = ({
  id,
  image,
  title,
  category,
  price,
}: {
  id: string;
  image: string;
  title: string;
  category: string;
  price: number;
}) => {
 
  return (
    <div className="w-[400px] flex flex-col gap-2 justify-center max-md:w-[300px]">
      <Link
        to={`/product/${id}`}
        className="w-full h-[300px] max-md:h-[200px] overflow-hidden"
      >
        <img src={image=="product image 1.jpg"?luxury1:image=="product image 2.jpg"? luxury2: image=="product image 3.jpg"?luxury3:image=="product image 4.jpg"?luxury4:image=="product image 5.jpg"?luxury5:luxury6} alt={title} />
      </Link>
      <Link
        to={`/product/${id}`}
        className="text-black text-center text-3xl tracking-[1.02px] max-md:text-2xl"
      >
        <h2>{title}</h2>
      </Link>
      <p className="text-secondaryBrown text-lg tracking-wide text-center max-md:text-base">
        {formatCategoryName(category)}{" "}
      </p>
      <p className="text-black text-2xl text-center font-bold max-md:text-xl">
        {price * 5} TL
      </p>
      <div className="w-full flex flex-col gap-1">
        <Link
          to={`/product/${id}`}
          className="text-white bg-secondaryBrown text-center text-xl font-normal tracking-[0.6px] leading-[72px] w-full h-12 flex items-center justify-center max-md:text-base"
        >
          Ürünü görüntüle
        </Link>
        <Link
          to={`/product/${id}`}
          className="bg-white text-black text-center text-xl border border-[rgba(0, 0, 0, 0.40)] font-normal tracking-[0.6px] leading-[72px] w-full h-12 flex items-center justify-center max-md:text-base"
        >
          Daha fazla bilgi edin
        </Link>
      </div>
    </div>
  );
};
export default ProductItem;
