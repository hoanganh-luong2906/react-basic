
import React from 'react';
import ChildComponent from './ChildComponent';

class MyComponent extends React.Component {

    state = {
        userName: 'HAL',
        password: '123',
        arrJobs: [
            { id: 'D123', title: 'Developer', salary: '400$' },
            { id: 'T223', title: 'Tester', salary: '650$' },
            { id: 'PM123', title: 'Project Manager', salary: '890$' }
        ]
    }

    handleUserNameChange = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleClickButton = (event) => {
        event.preventDefault()
        console.log(this.state)
        alert('Your form has been submitted sucessfully')
    }

    render() {

        return (
            <>
                <div>HTML FORM</div>
                <form>
                    <label>UserName</label><br />
                    <input
                        type='text'
                        value={this.state['userName']}
                        onChange={(event) => this.handleUserNameChange(event)}
                    />
                    <br />
                    <label>Password</label><br />
                    <input
                        type='password'
                        value={this.state['password']}
                        onChange={(event) => this.handlePasswordChange(event)}
                    />
                    <br />
                    <input
                        type='submit'
                        name='action'
                        value='Submit'
                        onClick={(event) => this.handleClickButton(event)}
                    />
                </form>

                <ChildComponent
                    usName={this.state.userName}
                    pass={'25430'}
                    address={'Earth'}
                    jobList={this.state.arrJobs}
                />

            </>
        );

    }
}

export default MyComponent;