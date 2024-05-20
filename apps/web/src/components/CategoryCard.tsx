import { FC } from 'react';
import { Button } from './ui/button';

interface CategoryProps {
  category: string;
}

const CategoryCard: FC<CategoryProps> = ({ category }) => {
  return (
    <Button className="flex justify-center bg-brown-shades rounded-full hover:bg-brown-tints">
      <h3 className="text-base text-black p-2">{category}</h3>
    </Button>
  );
};

export default CategoryCard;
