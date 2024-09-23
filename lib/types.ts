interface Category {
  id: string;
  title: string;
  color: string;
}

interface ItemData {
  item: Category;
  index: number;
}

export { Category, ItemData };
