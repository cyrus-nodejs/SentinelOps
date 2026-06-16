interface Event {
  timestamp: string;
  message: string;
}

export function InvestigationTimeline({
  events,
}: {
  events: Event[];
}) {
  return (
    <div className="space-y-4">
      {events.map((event) => (
        <div
          key={
            event.timestamp +
            event.message
          }
        >
          <div className="text-sm font-medium">
            {event.timestamp}
          </div>

          <div className="text-muted-foreground">
            {event.message}
          </div>
        </div>
      ))}
    </div>
  );
}