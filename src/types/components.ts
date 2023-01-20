import React from 'react';

export interface ComponentBaseProps {
  className?: string;
}

export type ComponentBasePropsWithChildren = ComponentBaseProps & React.PropsWithChildren;
