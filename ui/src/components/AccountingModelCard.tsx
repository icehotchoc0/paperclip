import { Database, Gauge, ReceiptText } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function AccountingModelCard() {
  const { t } = useTranslation("costs");

  const surfaces = [
    {
      titleKey: "inferenceLedgerTitle" as const,
      descriptionKey: "inferenceLedgerSurfaceDescription" as const,
      icon: Database,
      pointKeys: ["inferenceLedgerPoint1", "inferenceLedgerPoint2", "inferenceLedgerPoint3"] as const,
      tone: "from-sky-500/12 via-sky-500/6 to-transparent",
    },
    {
      titleKey: "financeLedgerTitle" as const,
      descriptionKey: "financeLedgerSurfaceDescription" as const,
      icon: ReceiptText,
      pointKeys: ["financeLedgerPoint1", "financeLedgerPoint2", "financeLedgerPoint3"] as const,
      tone: "from-amber-500/14 via-amber-500/6 to-transparent",
    },
    {
      titleKey: "liveQuotas" as const,
      descriptionKey: "liveQuotasDescription" as const,
      icon: Gauge,
      pointKeys: ["liveQuotasPoint1", "liveQuotasPoint2", "liveQuotasPoint3"] as const,
      tone: "from-emerald-500/14 via-emerald-500/6 to-transparent",
    },
  ];

  return (
    <Card className="relative overflow-hidden border-border/70">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.1),transparent_32%)]" />
      <CardHeader className="relative px-5 pt-5 pb-2">
        <CardTitle className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          {t("accountingModel")}
        </CardTitle>
        <CardDescription className="max-w-2xl text-sm leading-6">
          {t("accountingModelDescription")}
        </CardDescription>
      </CardHeader>
      <CardContent className="relative grid gap-3 px-5 pb-5 md:grid-cols-3">
        {surfaces.map((surface) => {
          const Icon = surface.icon;
          const title = t(surface.titleKey);
          return (
            <div
              key={surface.titleKey}
              className={`rounded-2xl border border-border/70 bg-gradient-to-br ${surface.tone} p-4 shadow-sm`}
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/80">
                  <Icon className="h-4 w-4 text-foreground" />
                </div>
                <div>
                  <div className="text-sm font-semibold">{title}</div>
                  <div className="text-xs text-muted-foreground">{t(surface.descriptionKey)}</div>
                </div>
              </div>
              <div className="space-y-1.5 text-xs text-muted-foreground">
                {surface.pointKeys.map((pointKey) => (
                  <div key={pointKey}>{t(pointKey)}</div>
                ))}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
