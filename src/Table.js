import React from 'react'

export default function Table (props) {
    console.log(props);

    const displayTables = (props) => {

        if (props.length > 0) {
            return (
                    props && props.map((table, index) => {
                        return(
                            <div>
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