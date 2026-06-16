export function ActivityStream({
  items,
}: {
  items: any[];
}) {
  return (
    <div className="space-y-3">
      {items.map(
        (item, index) => (
          <div key={index}>
            {item.message}
          </div>
        )
      )}
    </div>
  );
}