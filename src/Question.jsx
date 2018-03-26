import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Question.css'

class Question extends Component {
    constructor() {
        super()
        this.state = {
            selectedOption: null
        }
    }

    handleClick(option) {
        this.setState({selectedOption: option})
    }

    render() {

        return (
            <div className="Question">
                <div className="Question-description">{this.props.description}</div>
                <ul>
                    {this.props.options.map(o => (
                            <li
                                key={o}
                                className={`Question-option ${o === this.state.selectedOption ? 'selected' : ''}`}
                                onClick={() => this.handleClick(o)}>{o}</li>
                        ))}
                </ul>
            </div>
        )
    }
}

Question.propTypes = {
    description: PropTypes.string.isRequired,
    options: PropTypes
        .arrayOf(PropTypes.string.isRequired)
        .isRequired
}

export default Question