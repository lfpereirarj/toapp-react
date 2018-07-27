import React from 'react'

export default props => (
    <div role='form' className='todo-form'>
        <div className="col-xs-12 col-sm-9 col-md-10">
            <input id='description' className='form-control' type="text" placeholder='Adicione uma tarefa'></input>
        </div>
        <div className="col-xs-12 col-sm-3 col-md-2">
            <button className="btn btn-primary" type="button">
                <i className="fa fa-plus"></i>
            </button>
        </div>
    </div>
)
