'use client';

import React from 'react';

export const TextGenerateEffect = ({ words, className }: { words: string; className?: string }) => {
  return <p className={className}>{words}</p>;
};
