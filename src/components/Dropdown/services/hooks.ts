import {useState} from 'react';

import {getSearchByTitle} from '../services/utils';
import {DropdownList} from './types';

const UseDropdown = (items: DropdownList, multiselect: boolean) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isDropdownOpened, toggleDropdown] = useState(false);
  const [checked, setChecked] = useState<string[]>([]);

  const handleCheck = (id: string) => {
    if (!multiselect) {
      setChecked((prevState) => (prevState[0] !== id ? [id] : []));

      return;
    }

    const checkedIndex = checked.indexOf(id);
    let newChecked: string[] = [];

    if (checkedIndex === -1) {
      newChecked = newChecked.concat(checked, id);
    } else if (checkedIndex === 0) {
      newChecked = newChecked.concat(checked.slice(1));
    } else if (checkedIndex === checked.length - 1) {
      newChecked = newChecked.concat(checked.slice(0, -1));
    } else if (checkedIndex > 0) {
      newChecked = newChecked.concat(
          checked.slice(0, checkedIndex),
          checked.slice(checkedIndex + 1),
      );
    }

    setChecked(newChecked);
  };

  const isChecked = (id: string): boolean => checked.indexOf(id) !== -1;

  const searchResult = getSearchByTitle(items, searchValue);

  return {
    setSearchValue,
    isDropdownOpened,
    toggleDropdown,
    checked,
    handleCheck,
    isChecked,
    searchResult,
  };
};

export default UseDropdown;
