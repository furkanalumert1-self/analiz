"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  LabelList,
} from "recharts";

const axis = { fontSize: 11, fill: "#8a827a" };

function TooltipBox({ active, payload, label, unit }: { active?: boolean; payload?: { name: string; value: number; color: string }[]; label?: string; unit?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-[var(--line)] bg-white px-3 py-2 text-[12px] shadow-card">
      <p className="mb-1 font-semibold text-ink">{label}</p>
      {payload.map((p) => (
        <p key={p.name} className="flex items-center gap-2 text-ink-2">
          <span className="h-2 w-2 rounded-sm" style={{ background: p.color }} />
          {payload.length > 1 && <span>{p.name}:</span>}
          <span className="font-semibold tabular-nums text-ink">
            {p.value} {unit}
          </span>
        </p>
      ))}
    </div>
  );
}

/** Single-series vertical bar chart. */
export function ColumnChart<T extends object>({
  data,
  x,
  y,
  unit = "ürün",
  height = 240,
  color = "var(--chart-1)",
}: {
  data: T[];
  x: keyof T & string;
  y: keyof T & string;
  unit?: string;
  height?: number;
  color?: string;
}) {
  return (
    <div style={{ height }} className="w-full">
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 20, right: 4, left: -24, bottom: 0 }} barCategoryGap="22%">
          <CartesianGrid vertical={false} stroke="var(--chart-grid)" />
          <XAxis dataKey={x} tick={axis} tickLine={false} axisLine={{ stroke: "var(--line)" }} interval={0} />
          <YAxis tick={axis} tickLine={false} axisLine={false} allowDecimals={false} />
          <Tooltip cursor={{ fill: "rgba(113,81,58,.06)" }} content={<TooltipBox unit={unit} />} />
          <Bar dataKey={y} fill={color} radius={[4, 4, 0, 0]} maxBarSize={48}>
            <LabelList dataKey={y} position="top" style={{ fontSize: 11, fill: "#57504a" }} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

/** Single-series horizontal bar chart, good for long category names. */
export function RowChart<T extends object>({
  data,
  label,
  value,
  unit = "ürün",
  color = "var(--chart-1)",
  labelWidth = 150,
}: {
  data: T[];
  label: keyof T & string;
  value: keyof T & string;
  unit?: string;
  color?: string;
  labelWidth?: number;
}) {
  const height = data.length * 28 + 16;
  return (
    <div style={{ height }} className="w-full">
      <ResponsiveContainer>
        <BarChart data={data} layout="vertical" margin={{ top: 0, right: 32, left: 0, bottom: 0 }} barCategoryGap="18%">
          <XAxis type="number" hide allowDecimals={false} />
          <YAxis type="category" dataKey={label} width={labelWidth} tick={{ ...axis, fill: "#57504a" }} tickLine={false} axisLine={false} interval={0} />
          <Tooltip cursor={{ fill: "rgba(113,81,58,.06)" }} content={<TooltipBox unit={unit} />} />
          <Bar dataKey={value} fill={color} radius={[0, 4, 4, 0]} maxBarSize={18}>
            <LabelList dataKey={value} position="right" style={{ fontSize: 11, fill: "#57504a" }} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

/** Two-series stacked bar (Callypso vs Other) — legend + tooltip, never color alone. */
export function PriorityStack({ data }: { data: { priority: string; Callypso: number; Other: number }[] }) {
  return (
    <div style={{ height: 220 }} className="w-full">
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 8, right: 4, left: -24, bottom: 0 }} barCategoryGap="28%">
          <CartesianGrid vertical={false} stroke="var(--chart-grid)" />
          <XAxis dataKey="priority" tick={axis} tickLine={false} axisLine={{ stroke: "var(--line)" }} />
          <YAxis tick={axis} tickLine={false} axisLine={false} allowDecimals={false} />
          <Tooltip cursor={{ fill: "rgba(113,81,58,.06)" }} content={<TooltipBox unit="fırsat" />} />
          <Legend iconType="square" iconSize={9} wrapperStyle={{ fontSize: 12, color: "#57504a" }} />
          <Bar dataKey="Callypso" name="Callypso Engage" stackId="a" fill="var(--chart-1)" stroke="#fff" strokeWidth={2} maxBarSize={52} />
          <Bar dataKey="Other" name="Diğer AI / otomasyon" stackId="a" fill="var(--chart-2)" stroke="#fff" strokeWidth={2} radius={[4, 4, 0, 0]} maxBarSize={52} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
