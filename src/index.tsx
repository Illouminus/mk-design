import { createRoot } from 'react-dom/client'
import { App } from 'app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import 'app/styles/index.scss'
import 'shared/config/i18n/i18n'
import { StoreProvider } from 'app/providers/StoreProvider'

const domNode = document.getElementById('root')!
const root = createRoot(domNode)

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>

)
