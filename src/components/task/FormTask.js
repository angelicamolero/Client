import React  from 'react'

const FormTask = () => {
    return(
        <div className="form">
            <form>
                <div className="container-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder=" Task's Name"
                        name="name"
                    />
                </div>
                <div className="container-input">
                    <input
                      type="submit"
                      className="btn btn-primary btn-subtmit btn-block"
                      value="Add Task"
                    />
                </div>
            </form>
        </div>
    )
}

export default FormTask;