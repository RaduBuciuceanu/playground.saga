import React from 'react'
import { App } from 'app'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'home',
  initialState: {},
  reducers: {},
})

const store = createStore(slice.reducer, applyMiddleware(createSagaMiddleware()))

ReactDOM.render(<React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
</React.StrictMode>, document.getElementById('root'))
