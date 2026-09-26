"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import clsx from "clsx";
import { Card, FilterRow, SectionHeader } from "../ui";
import { questions } from "@/data/strategy";

export default function Questions() {
  const [group, setGroup] = useState("all");
  const [done, setDone] = useState<Record<string, boolean>>({});
  const total = questions.reduce((n, g) => n + g.items.length, 0);
  const answered = Object.values(done).filter(Boolean).length;
  let counter = 0;

  return (
    <section>
      <SectionHeader
        no="11 — Meeting Questions"
        title={`Toplantıda sorulacak ${total} kritik soru`}
        intro="Soruların cevapları 'Requires data' işaretli tüm alanları (RFM, repeat purchase, win-back, ciro etkisi) sayısallaştırmak için gerekli. Toplantı sırasında cevaplananları işaretleyebilirsiniz (yalnızca bu tarayıcıda, kaydedilmez)."
      />

      <Card className="mb-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <FilterRow
            label="Kategori"
            value={group}
            onChange={setGroup}
            options={[{ value: "all", label: "Tümü" }, ...questions.map((g) => ({ value: g.group, label: `${g.group} (${g.items.length})` }))]}
          />
          <span className="text-[12.5px] tabular-nums text-ink-2">
            {answered}/{total} cevaplandı
          </span>
        </div>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        {questions.map((g) => {
          const start = counter;
          counter += g.items.length;
          if (group !== "all" && group !== g.group) return null;
          return (
            <Card key={g.group}>
              <p lang="en" className="eyebrow">{g.group}</p>
              <ol className="mt-3 space-y-2">
                {g.items.map((q, i) => {
                  const key = `${g.group}-${i}`;
                  return (
                    <li key={key}>
                      <button
                        type="button"
                        onClick={() => setDone((d) => ({ ...d, [key]: !d[key] }))}
                        aria-pressed={!!done[key]}
                        className="flex w-full items-start gap-3 rounded-lg p-2 text-left transition hover:bg-cocoa-50"
                      >
                        <span
                          className={clsx(
                            "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-[10px]",
                            done[key] ? "border-cocoa-800 bg-cocoa-800 text-white" : "border-cocoa-200 text-ink-3",
                          )}
                        >
                          {done[key] ? <Check size={12} /> : start + i + 1}
                        </span>
                        <span className={clsx("text-[13.5px] leading-relaxed", done[key] ? "text-ink-3 line-through" : "text-ink")}>{q}</span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
