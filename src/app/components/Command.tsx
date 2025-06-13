"use client";

import { ReactNode } from "react";

interface Props {
  command: string | ReactNode;
}

export default function Command({ command }: Props) {
  return (
    <h1 className="text-md font-bold mb-6">
      <span className="text-green-400">dave@localhost</span>
      <span className="text-white">:</span>
      <span className="text-blue-400">~</span>
      <span className="dark:text-neutral-300">$ {command}</span>
    </h1>
  );
}
