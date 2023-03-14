import React from 'react'

import { ThemeProvider } from 'styled-components'
import { DecoratorFn } from '@storybook/react'
import { GlobalStyle } from '../src/styles/GlobalStyle'
import { darkTheme, lightTheme } from '../src/styles/theme'
import { withDesign } from 'storybook-addon-designs'
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom'
import { initialize, mswDecorator } from 'msw-storybook-addon'
import { Provider as StoreProvider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from '../src/app-state'




initialize()

const withRoute: DecoratorFn = (StoryFn, { parameters : {deepLink}}) => {
    
    return (
        <BrowserRouter>
            <StoryFn />
        </BrowserRouter>
    )
}

const withTheme: DecoratorFn = (StoryFn, context) => {
    const theme = context.parameters.theme ?? context.globals.theme
    const storyTheme = theme === 'dark' ? darkTheme : lightTheme
    return (
        <ThemeProvider theme={storyTheme}>
            <GlobalStyle />
            <StoryFn />
        </ThemeProvider>
    )
}


export const globalDecorators = [
    mswDecorator,
    withTheme, 
    withDesign,
    withRoute
]