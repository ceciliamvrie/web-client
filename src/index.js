import React, { createElement } from 'react'
import { render } from 'react-dom'
import 'babel-polyfill'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

render(createElement(App), document.getElementById('root'))
registerServiceWorker()
