import React, {InputHTMLAttributes} from 'react';
import cx from 'classnames';
import {ISearch} from 'icons';
import {ComponentBaseProps} from 'types/components';
import classes from './styles.module.css';

type TextInputProps = ComponentBaseProps & InputHTMLAttributes<HTMLInputElement>;

const TextInput = (props: TextInputProps): JSX.Element => {
  const {className, placeholder = 'Поиск', ...rest} = props;

  return (
    <div className={cx(classes.container, className)}>
      <ISearch className={classes.iconSearch} />
      <input placeholder={placeholder} type="text" className={classes.searchInput} {...rest} />
    </div>
  );
};

export default TextInput;
