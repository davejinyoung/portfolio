"use client";

export default function Command(props: { command: any }) {
  return (
    <h1 className="text-md font-bold mb-6">
      <span className="text-green-400">dave@localhost</span>
      <span className="text-white">:</span>
      <span className="text-blue-400">~</span>
      <span className="dark:text-neutral-300">$ {props.command}</span>
    </h1>
  );
}
