import React from 'react';

type CustomHeaderProps = {
  title: string;
};

export const CustomHeader = ({ title }: CustomHeaderProps) => (
  <header>
    <h1>{title}</h1>
  </header>
);
