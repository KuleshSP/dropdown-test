import React, {MouseEventHandler, ReactElement} from 'react';
import cx from 'classnames';
import {ComponentBaseProps} from 'types/components';
import classes from './styles.module.css';

interface ButtonIconProps extends ComponentBaseProps {
  icon: ReactElement;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const ButtonIcon = (props: ButtonIconProps): JSX.Element => {
  const {className, icon, handleClick} = props;

  return (
    <button onClick={handleClick} className={cx(classes.buttonIcon, className)}>
      {React.cloneElement(icon, {className: cx(classes.icon, icon.props.className)})}
    </button>
  );
};

export default ButtonIcon;
