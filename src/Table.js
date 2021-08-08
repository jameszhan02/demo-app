import React from 'react'

export default function Table (props) {
    console.log(props);
    console.log(props.table.length);

    const displayTables = (props) => {

        if (props.table.length > 0) {
            return (
                props.table && props.table.map((table, index) => {
                        return(
                            <div className="table-container" key={table.id}>
                                <div>
                                    {table.id}
                                </div>

                                <div>
                                    {table.name}
                                </div>
                                
                            </div>
                        )
                    }
            ))
        } else {
            return (
                <div>
                    no tables
                </div>
            )
        }
            
    }

    return (
        <div>
           {displayTables(props)}
        </div>
    )
}