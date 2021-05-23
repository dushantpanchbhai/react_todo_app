import React from 'react'
import {TodoItem} from './TodoItem'
import SortedItems from './SortedItems'
import SortBy from './SortBy'
function Analytics(props) {
    //sorted Products list
    const [sortedProducts,setSortedProducts]=React.useState([...props.todos]);

    //use state for the sortField(this will tell)
    const [sortField,setSortField] = React.useState('name')


    console.log(sortField)

    console.log('sorted products are: =',sortedProducts)

    React.useEffect(() => {
        const sortArray = type => {
          const types = {
            dateAdded : 'dateAdded',
            dueDate: 'date',
            priority: 'priority',
          }; 

          const sortProperty = types[type];
          const sorted = [...props.todos];

          if(sortProperty === 'date')
          {
            console.log('date is selected')
            const sorted = [...sortedProducts].sort((a, b) => new Date(a.date.split('-').reverse()) - new Date(b.date.split('-').reverse()));
            console.log('sorted due dates are : ',sorted)
            setSortedProducts(sorted);
          }
          else if(sortProperty=== 'dateAdded')
          {
            console.log('date added is selected')
            const sorted = [...props.todos];
            setSortedProducts(sorted);
          }
          else if(sortProperty=== 'priority')
          {
            console.log('elese loop is selected')
            const sorted = [...sortedProducts].sort((a, b) => b[sortProperty] - a[sortProperty]);
            setSortedProducts(sorted);
          }
          
        };

        sortArray(sortField);
      }, [sortField]);

      
    return (
        
        <div className='container my-3'>
            <SortBy sortField={sortField} setSortField={setSortField}></SortBy>
            <SortedItems todos={sortedProducts} onDelete={props.onDelete}></SortedItems>
        </div>
    )
}

export default Analytics