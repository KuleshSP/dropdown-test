import React from 'react';
import type {ComponentBaseProps} from 'types/components';

export type DropdownItem = {
  id: string;
  Icon: React.FC<ComponentBaseProps>;
  title: string;
};
export type DropdownList = DropdownItem[];
