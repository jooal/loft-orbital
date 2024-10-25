import { Payload } from "@/generated/graphql";

// interface Payload {
//   id: string;
//   name: string;
//   description: string;
//   status: string;
//   category: string;
//   Customer: Customer;
// }

interface PayloadsTableProps {
  data: Payload[];
}

export const PayloadsTable = ({ data }: PayloadsTableProps) => {
  const headers = ["Name", "Status", "Description", "Category", "Customer"];

  return (
    <div>
      <h3>Payloads</h3>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              {headers.map(header => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(payload => (
              <tr key={payload.id}>
                <td>{payload.name}</td>
                <td>{payload.status}</td>
                <td>{payload.description}</td>
                <td>{payload.category}</td>
                <td>{payload.Customer?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
