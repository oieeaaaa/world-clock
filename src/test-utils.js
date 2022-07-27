import React from 'react'
import {render} from '@testing-library/react'
import { LocalTimeZoneProvider } from './contexts/useLocalTimezone';
import { ThemeContextProvider } from './contexts/useTheme';

const AllTheProviders = ({children}) => {
  return (
    <LocalTimeZoneProvider>
      <ThemeContextProvider>
        {children}
      </ThemeContextProvider>
    </LocalTimeZoneProvider>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}
