import { Table as BootstrapTable } from 'react-bootstrap';
import { get } from 'lodash';

interface IColumn {
  label: string;
  key: string;
  formatter?: any;
}

interface IResults {
  [key: string]: any;
}

interface ITable {
  columns: Array<IColumn>;
  results: Array<IResults>;
  keyId: string;
  onRowClick?: any;
  emptyText?: string;
}

export default function Table(props: ITable) {
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
            style={{ cursor: props.onRowClick ? 'pointer' : '' }}
            key={row[props.keyId]}
            onClick={() => {
              if (props.onRowClick) props.onRowClick(row);
            }}
          >
            {props.columns.map((column) => (
              <td key={column.key}>
                {column.formatter
                  ? column.formatter(row)
                  : get(row, column.key)}
              </td>
            ))}
          </tr>
        ))}
        {!props.results.length && (
          <tr>
            <td colSpan={props.columns.length}>{props.emptyText}</td>
          </tr>
        )}
      </tbody>
    </BootstrapTable>
  );
}
