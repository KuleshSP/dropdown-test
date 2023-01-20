import React, {MouseEventHandler} from 'react';
import cx from 'classnames';
import {ITimes} from 'icons';
import {ComponentBaseProps} from 'types/components';
import Typography from 'components/Typography';
import ButtonIcon from 'components/ButtonIcon';
import classes from './styles.module.css';

interface ChipProps extends ComponentBaseProps {
  title: string;
  onClose: MouseEventHandler<HTMLButtonElement>;
}
const Chip = (props: ChipProps): JSX.Element => {
  const {className, title, onClose} = props;

  return (
    <div className={cx(classes.chip, className)}>
      <Typography className={classes.title} variant="p3">
        {title}
      </Typography>

      <ButtonIcon handleClick={onClose} className={classes.buttonIcon} icon={<ITimes />} />
    </div>
  );
};

export default Chip;
