import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "../../shadcn/components/ui/table";
import { Skeleton } from "../../shadcn/components/ui/skeleton";

type SkeletonTableProps = {
  rows?: number;
  columns?: number;
};

const SkeletonTable = ({ rows = 20, columns = 3 }: SkeletonTableProps) => {
  return (
    <div className='rounded-md border'>
      <Table>
        <TableBody>
          {Array.from({ length: rows }).map((_, index) => (
            <TableRow key={index}>
              <TableCell colSpan={columns}>
                <Skeleton className='h-6 w-full' />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SkeletonTable;
