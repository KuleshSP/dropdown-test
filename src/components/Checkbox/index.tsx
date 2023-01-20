import React, {InputHTMLAttributes} from 'react';
import cx from 'classnames';
import {ICheckbox} from 'icons';
import classes from './styles.module.css';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
}
const Checkbox = (props: CheckboxProps): JSX.Element => {
  const {containerClassName, ...rest} = props;

  return (
    <div className={cx(classes.container, containerClassName)}>
      <input type="checkbox" className={classes.checkbox} {...rest} />
      <ICheckbox className={classes.checkmark} />
    </div>
  );
};

export default Checkbox;
