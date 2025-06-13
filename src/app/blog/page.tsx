import BlinkingCursor from "../components/BlinkingCursor";
import Command from "../components/Command";

export default function Blog() {
  return (
    <section className="pt-25 pb-20 dark:text-neutral-400">
      <div className="text-sm opacity-60 mb-10">
        Last login: {new Date().toLocaleDateString()} on ttys000
      </div>
      <Command command={"ls -la blogs/"} />
      <p className="pl-4 pb-20">Coming soon...</p>
      <Command command={<BlinkingCursor />} />
    </section>
  );
}