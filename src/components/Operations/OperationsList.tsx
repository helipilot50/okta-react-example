import React, { Fragment, useState } from 'react';
import { DetailsList, IColumn, mergeStyleSets } from '@fluentui/react';
import { Operation } from './Operation';
import { OperationDetail } from './OperationDetail';

const classNames = mergeStyleSets({
  table: {
    margin: 'auto',
  },
});



const operations: Operation[] = [
  {
    from: '0000 0284 7529 4751 8475',
    to: '0980 9808 8200 7680',
    amount: 1510.00,
    date: new Date('2020-05-20'),
  },
  {
    from: '0000 0284 7529 4751 8475',
    to: '0980 9808 8200 7680',
    amount: 1010,
    date: new Date('2020-05-19'),
  },
  {
    from: '0000 0284 7529 4751 8475',
    to: '0980 9808 8200 7680',
    amount: 1350,
    date: new Date('2020-05-18'),
  },
  {
    from: '0000 0284 7529 4751 8475',
    to: '0980 9808 8200 7680',
    amount: 1900,
    date: new Date('2020-05-18'),
  },
  {
    from: '0000 0284 7529 4751 8475',
    to: '0980 9808 8200 7680',
    amount: 6350,
    date: new Date('2020-05-17'),
  },
];

const columns = [
  { key: 'from', name: 'From', fieldName: 'from', minWidth: 100, maxWidth: 300, isResizable: true },
  { key: 'to', name: 'To', fieldName: 'to', minWidth: 100, maxWidth: 300, isResizable: true },
  { key: 'amount', name: 'Amount', fieldName: 'amount', minWidth: 100, maxWidth: 300, isResizable: true },
  { key: 'date', name: 'Date', fieldName: 'date', minWidth: 100, maxWidth: 300, isResizable: true },
];

function _renderItemColumn(item?: any, index?: number, column?: IColumn) {

  const fieldContent = item[column?.fieldName as keyof Operation] as string;

  switch (column?.key) {

    case 'date':
      return (
        <span>
          {fieldContent.toString()}
        </span>
      );

    case 'amount':
      return (
        <span>
          {'$' + fieldContent.toString()}
        </span>
      );


    default:
      return <span>{fieldContent}</span>;
  }
}
export function OperationsList() {
  const [showDetail, setShowDetail] = useState(false);
  const [currentOperation, setCurrentOperation] = useState<Operation | undefined>(undefined);
  function _onItemInvoked(item: any, index: number | undefined): void {
    setCurrentOperation(item);
    setShowDetail(true);
  }
  function onDismiss(operation: Operation | undefined) {
    setShowDetail(false);
    setCurrentOperation(operation);
    alert(JSON.stringify(operation, null, 2));
  }
  return (
    <Fragment>
      <DetailsList className={classNames.table}
        items={operations}
        columns={columns}
        selectionMode={0}
        onRenderItemColumn={_renderItemColumn}
        onItemInvoked={_onItemInvoked}
      />
      {showDetail && <OperationDetail operation={currentOperation} onDismiss={onDismiss} />}
    </Fragment>
  );

};
