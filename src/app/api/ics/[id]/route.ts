import type { NextRequest } from "next/server";
import { EVENTS } from "@/lib/events";

function icsEscape(s: string): string {
  return s
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}

function foldLine(line: string): string {
  if (line.length <= 75) return line;
  const chunks: string[] = [];
  let rest = line;
  while (rest.length > 75) {
    chunks.push(rest.slice(0, 75));
    rest = " " + rest.slice(75);
  }
  chunks.push(rest);
  return chunks.join("\r\n");
}

export async function GET(
  _req: NextRequest,
  ctx: RouteContext<"/api/ics/[id]">
) {
  const { id } = await ctx.params;
  const event = EVENTS.find((e) => e.id === id);

  if (!event) {
    return new Response("Event not found", { status: 404 });
  }

  const now = new Date()
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "");

  const location = icsEscape(
    `${event.location}, 23 Osu Avenue, Ringway Estates, Osu, Accra, Ghana`
  );

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//PESDAC//PESDAC Events//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${event.id}@pesdacgh.org`,
    `DTSTAMP:${now}`,
    `DTSTART:${event.dtstart}`,
    `DTEND:${event.dtend}`,
    foldLine(`SUMMARY:${icsEscape(event.title)}`),
    foldLine(`DESCRIPTION:${icsEscape(event.description)}`),
    foldLine(`LOCATION:${location}`),
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  return new Response(lines.join("\r\n"), {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `attachment; filename="${event.id}.ics"`,
    },
  });
}
