import { define, render, WeElement } from '../../src/omix'

define('my-counter', class extends WeElement {
  count = 1

  sub = () => {
    this.count--
    this.update()
  }

  add = () => {
    this.count++
    this.update()
  }

  buttonAStyle = {
    x: 0,
		color: 'red'
  }

  buttonBStyle = {
    x: 40,
		color: 'red'
  }

  testStyle = {
    x: 20,
    backgroundColor: 'red'
  }

	divStyle = {
		x: 100,
		y: 100,
		width: 100,
		height: 100,
		backgroundColor: 'green'
	}

  render() {
    return (
      <div style={this.divStyle}>
        <button style={this.buttonAStyle} onClick={this.sub}>-</button>
        <span style={this.testStyle}>{this.count}</span>
        <button style={this.buttonBStyle} onClick={this.add}>+</button>
      </div>
    )
  }
})

render(<my-counter />, 'body')
