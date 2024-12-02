import './table.css'
export const COLUMNS = [
    {
      Header: 'Order ID',
      accessor: 'orderId',
    },
    {
      Header: 'User',
      accessor: 'user',
    },
    {
      Header: 'Project',
      accessor: 'project',
    },
    {
      Header: 'Address',
      accessor: 'address',
    },
    {
      Header: 'Date',
      accessor: 'date',
    },
    {
      Header: 'Status',
      accessor: 'status',
      Cell: ({ value }) => {
        let statusClass = '';
        switch (value) {
          case 'In Progress':
            statusClass = 'statusInProgress';
            break;
          case 'Complete':
            statusClass = 'statusComplete';
            break;
          case 'Pending':
            statusClass = 'statusPending';
            break;
          case 'Approved':
            statusClass = 'statusApproved';
            break;
          case 'Rejected':
            statusClass = 'statusRejected';
            break;
          default:
            statusClass = 'statusDefault';
            break;
        }
        return (
          <span className='statusContainer'>
            <span className={`circle ${statusClass}`}></span>
            <span className={`${statusClass}Text`}>{value}</span>
          </span>
        );
      },
    },
  ];
  