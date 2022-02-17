import { Table as BootstrapTable } from 'react-bootstrap';

export default function Table(props) {
  return (
    <BootstrapTable striped hover>
      <thead>
        <tr>
          {props.columns.map((column) => (
            <th key={column.label}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.results.map((row) => (
          <tr
            key={row[props.keyId]}
            onClick={() => {
              if (props.onRowClick) props.onRowClick(row);
            }}
          >
            {props.columns.map((column) => (
              <td key={column.key}>
                {column.formatter ? column.formatter(row) : row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </BootstrapTable>
  );
}
