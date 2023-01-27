import React, {useEffect} from 'react';
import cx from 'classnames';
import {ComponentBasePropsWithChildren} from 'types/components';
import Chip from 'components/Chip';
import ButtonIcon from 'components/ButtonIcon';
import {IArrow} from 'icons';
import Checkbox from 'components/Checkbox';
import Typography from 'components/Typography';
import {SearchInput} from 'components';
import type {DropdownList} from '../services/types';
import useDropdown from '../services/hooks';
import classes from './styles.module.css';

interface DropdownProps extends ComponentBasePropsWithChildren {
  items: DropdownList;
  onChange: (item: string[]) => void;
  multiselect?: boolean;
  hideIcon?: boolean;
}

const Dropdown = (props: DropdownProps): JSX.Element => {
  const {className, items, onChange, multiselect = true, hideIcon = false} = props;

  const {
    setSearchValue,
    isDropdownOpened,
    toggleDropdown,
    checked,
    handleCheck,
    isChecked,
    searchResult,
  } = useDropdown(items, multiselect);

  useEffect(() => {
    onChange(checked);
  }, [checked]);

  return (
    <div className={cx(classes.dropdown, className)}>
      {checked.map((id) => {
        const title = items.find((item) => item.id === id);

        return <Chip onClose={() => handleCheck(id)} title={title?.title || ''} key={id} />;
      })}

      <ButtonIcon
        className={classes.arrowButton}
        handleClick={() => toggleDropdown((prevState) => !prevState)}
        icon={
          <IArrow
            className={cx({
              [classes.arrowButtonIconOpened]: isDropdownOpened,
            })}
          />
        }
      />

      <div
        className={cx(classes.dropdownList, {
          [classes.dropdownListActive]: isDropdownOpened,
        })}
      >
        <SearchInput onChange={(e) => setSearchValue(e.target.value)} className={classes.search} />

        {searchResult.length !== 0 ? (
          searchResult.map((item) => {
            const {id, title, Icon} = item;

            return (
              <label key={id} className={classes.label}>
                {hideIcon ? null : <Icon className={classes.labelIcon} />}
                <Typography className={classes.labelTitle}>{title}</Typography>
                <Checkbox checked={isChecked(id)} onChange={() => handleCheck(id)} />
              </label>
            );
          })
        ) : (
          <div className={classes.nothingFoundBox}>
            <Typography>Элементы не найдены</Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
