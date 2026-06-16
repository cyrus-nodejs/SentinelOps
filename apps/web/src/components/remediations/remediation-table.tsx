import { Button } from '@/components/ui/button';

export function RemediationTable({
  items,
}: {
  items?: any[];
}) {
  return (
    <table className="w-full">
      <tbody>
        {items?.map((item) => (
          <tr key={item.id}>
            <td>
              {item.action}
            </td>

            <td>
              {item.status}
            </td>

            <td>
              <Button>
                Approve
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}