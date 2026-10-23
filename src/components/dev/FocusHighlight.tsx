"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { FOCUS_TARGETS, type FocusKey, type FocusTarget } from "@/lib/focusTargets";

const ATTR = "data-focus-hl";

export function FocusHighlight() {
  const pathname = usePathname();

  useEffect(() => {
    const key = new URLSearchParams(window.location.search).get("focus");
    if (!key || !(key in FOCUS_TARGETS)) return;
    const target: FocusTarget = FOCUS_TARGETS[key as FocusKey];

    const find = () =>
      [...document.querySelectorAll(target.selector)]
        .map((el) => (target.parent ? el.parentElement : el))
        .filter((el): el is HTMLElement => el instanceof HTMLElement);

    const mark = () => {
      const els = find();
      els.forEach((el) => el.setAttribute(ATTR, ""));
      return els;
    };

    const scroll = (behavior: ScrollBehavior) =>
      find()[0]?.scrollIntoView({ block: "center", behavior });

    mark();
    scroll("smooth");
    const timer = window.setTimeout(() => scroll("auto"), 900);
    const onLoad = () => scroll("auto");
    window.addEventListener("load", onLoad);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("load", onLoad);
      find().forEach((el) => el.removeAttribute(ATTR));
    };
  }, [pathname]);

  return (
    <style>{`[${ATTR}]{outline:4px dashed #00e5ff !important;outline-offset:10px !important;border-radius:6px}`}</style>
  );
}
