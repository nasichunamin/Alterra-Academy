import React, { Component } from 'react';
import './Todos.css'
class ListTodos extends Component
{
    renderTodos ()
    {
        if ( this.props.todo.completed )
            return <s>{ this.props.todo.title }</s>;
        else
            return this.props.todo.title;
    }
    render ()
    {
        return (
            <React.Fragment >
                <td style={ { width: 10 } } className="text-center">
                    { this.props.index }
                </td>
                <td style={ { width: 15 } } className="text-center">
                    <input type="checkbox" defaultChecked={ this.props.todo.completed } onChange={ () => this.props.todoComplete( this.props.todo ) } />
                </td>
                <td>
                    {
                        this.renderTodos()
                    }
                </td>
                <td style={ { width: 100 } } className="text-center">
                    <button onClick={ () => this.props.todoDelete( this.props.todo.id ) } className="btn_delete">Delete</button>
                </td>
            </React.Fragment>
        );
    }
}

export default ListTodos;