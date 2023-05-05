import React from 'react';

class MyComponent extends React.Component {

    /**
     * key:value
     * seperator: ','
     */
    state = {
        name: 'HAL',
        channel: 'HAL with LOVE'
    }

    /**
     * 
     * @returns block
     * <React.Fragment>...</React.Fragment> = <>...</>
     */

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleClickButton = () => {
        alert('You clicked me!')
    }

    render() {

        return (
            <>
                <input
                    name='name'
                    value={this.state.name}
                    type='text'
                    onChange={(event) => this.handleOnChangeName(event)}
                ></input>
                <div className='first'>
                    {console.log('My name is: ', this.state['name'])}
                    Hello from my Component! from {this.state.channel} by {this.state.name}
                </div>
                <div className='button'>
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>
            </>
        );

    }
}

export default MyComponent;