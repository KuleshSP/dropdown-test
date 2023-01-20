import type {DropdownList} from './types';

export const getSearchByTitle = (items: DropdownList, searchValue: string): DropdownList => {
  if (!searchValue) return items;

  return items.filter((item) => {
    if (item.title.startsWith(searchValue.toLowerCase())) {
      return true;
    }
  });
};
