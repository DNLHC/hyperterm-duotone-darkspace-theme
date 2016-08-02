'use strict'

const foregroundColor = '#ebebff'
const backgroundColor = '#24242e'
const black = backgroundColor
const slate = '#595969'
const lslate = '#767693'
const lightSlate = '#3f3f50'
const blue = '#9d9dc8'
const orange = '#dd672c'
const lightOrange = '#fe8c52'
const gray = '#6a574d'
const brightBlack = slate
const brightWhite = foregroundColor

const colors = {
	black: black,
	red: slate,
	green: lightSlate,
	yellow: blue,
	blue: orange,
	magenta: lightOrange,
	cyan: lslate,
	white: foregroundColor,
	lightBlack: brightBlack,
	lightRed: slate,
	lightGreen: lslate,
	lightYellow: blue,
	lightBlue: blue,
	lightMagenta: lightOrange,
	lightCyan: gray,
	lightWhite: foregroundColor
}

exports.decorateConfig = config => {
	return Object.assign({}, config, {
		backgroundColor,
		foregroundColor,
		borderColor: '#24242e',
		cursorColor: orange,
		colors: colors,
		css: `
			${config.css || ''}
			.tab_active:before {
				border-color: #fe8c52
			}
		`
	})
}

exports.middleware = () => (next) => (action) => {
  switch (action.type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD':
      action.config.foregroundColor = foregroundColor
      action.config.backgroundColor = backgroundColor
      action.config.cursorColor = orange
      action.config.colors = colors
  }
  next(action)
}
