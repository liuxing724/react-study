/**
 * Created by liuxing5 on 2017/8/19.
 */
import React,{Component} from 'react';

function ListItem({ value }) {
    return(
        <li>
            <span>{value}</span>
        </li>
    );
}

function List({list, title}) {
    return(
        <div>
            <ListTitle title={title} />
            <ul>
                {list.map((entry, index) =>(
                    <ListItem key={`list-${index}`} value ={entry.text}/>
                ))}
            </ul>
        </div>
    )
}
