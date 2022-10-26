import React, { PropsWithChildren, ReactNode } from 'react';

export type LazyWrapperType = PropsWithChildren<{
  placeholder?: ReactNode;
}>;

export default function LazyWrapper({
  children,
  placeholder,
}: LazyWrapperType) {
  return <> {children} </>;
}
