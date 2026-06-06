import { useEffect, useState } from "react";

/**
 * Typing effect that cycles through a list of words, typing and deleting
 * each one. Returns the currently-visible substring.
 */
export function useTypewriter(
  words: string[],
  { typeSpeed = 75, deleteSpeed = 40, pause = 1600 } = {}
) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const next = deleting
      ? current.slice(0, text.length - 1)
      : current.slice(0, text.length + 1);

    const t = setTimeout(next === text ? () => {} : () => setText(next), deleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(t);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}
