import React, {Component, PropTypes} from 'react';

class Suggest extends Component {
    getValue() {
        return this.refs.lowLevelInput.value;
    }

    render() {
        const randomId = Math.random().toString(16).substring(2);
        return (
            <div>
                <input list={randomId}
                       defaultValue={this.props.defaultValue}
                       ref="lowLevelInput"
                       id={this.props.id}/>
                <datalist id={randomId}>
                    {
                        this.props.options.map((item, index) => {
                            return <option value={item} key={index}/>
                        })
                    }
                </datalist>
            </div>
        )
    }
}

Suggest.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string)
};

export default Suggest;