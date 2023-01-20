import React from 'react';
import cx from 'classnames';
import type {ComponentBasePropsWithChildren} from 'types/components';
import {TypographyVariants} from './types';
import classes from './styles.module.css';

interface TypographyProps extends ComponentBasePropsWithChildren {
  variant?: TypographyVariants;
  className?: string;
}
const Typography = (props: TypographyProps): JSX.Element => {
  const {children, className, variant = 'p1'} = props;

  return <p className={cx(classes[variant], className)}>{children}</p>;
};

export default Typography;
