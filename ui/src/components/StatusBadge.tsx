import { useTranslation } from "react-i18next";
import { cn } from "../lib/utils";
import { statusBadge, statusBadgeDefault } from "../lib/status-colors";

const statusI18nKey: Record<string, string> = {
  backlog: "backlog",
  todo: "todo",
  in_progress: "inProgress",
  in_review: "inReview",
  done: "done",
  cancelled: "cancelled",
  blocked: "blocked",
};

export function StatusBadge({ status }: { status: string }) {
  const { t } = useTranslation("common");
  const key = statusI18nKey[status];
  const label = key ? t(key) : status.replace("_", " ");
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap shrink-0",
        statusBadge[status] ?? statusBadgeDefault
      )}
    >
      {label}
    </span>
  );
}
