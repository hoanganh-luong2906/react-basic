
import React from 'react';

class ChildComponent extends React.Component {

    state = {
        userName: 'HAL',
        password: '123'
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

        console.log(this.props)

        // First way of declaring variables.
        // let name = this.props.name;
        // let age = this.props['age'];
        // let address = this.props.address;

        //Second way of declaring variables
        let { usName, pass, address, jobList } = this.props;
        return (
            <>
                <div className='job-list'>
                    {
                        jobList.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            )
                        })
                    }
                </div>
            </>
        );

    }
}

export default ChildComponent;