import Link from "next/link";
import { FOCUS_TARGETS, type FocusKey } from "@/lib/focusTargets";

type Props = { focus: FocusKey; label?: string };

export function ShowOnSite({ focus, label = "Показати на сайті" }: Props) {
  if (!(focus in FOCUS_TARGETS)) return null;
  return (
    <Link
      href={`/?focus=${focus}`}
      className="inline-flex shrink-0 items-center rounded-button border-2 border-[#00e5ff] px-3 py-1.5 text-sm font-semibold text-[#00e5ff] transition-opacity hover:opacity-80"
    >
      {label} ↗
    </Link>
  );
}
