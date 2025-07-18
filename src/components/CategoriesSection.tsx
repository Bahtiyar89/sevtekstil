import CategoryItem from "./CategoryItem";
import luxury1 from '../assets/luxurycategory1.png'; 
import luxury2 from '../assets/luxurycategory2.png'; 
import luxury3 from '../assets/luxurycategory3.png';
import luxury4 from '../assets/luxurycategory4.png';

const CategoriesSection = () => {
  return (
    <div className="max-w-screen-2xl px-5 mx-auto mt-24">
      <h2 className="text-black text-5xl font-normal tracking-[1.56px] max-sm:text-4xl mb-12">
        Kategorilerimiz
      </h2>
      <div className="flex justify-between flex-wrap gap-y-10">
        <CategoryItem
          categoryTitle="Özel Baskı"
          image={luxury1}
          link="special-edition"
        />
        <CategoryItem
          categoryTitle="Lüks Koleksiyon"
          image={luxury2}
          link="luxury-collection"
        />
        <CategoryItem
          categoryTitle="Yaz Sürümü"
          image={luxury3}
          link="summer-edition"
        />
        <CategoryItem
          categoryTitle="Benzersiz Koleksiyon"
          image={luxury4}
          link="unique-collection"
        />
      </div>
    </div>
  );
};
export default CategoriesSection;
