import { type StoryFn } from '@storybook/react'
import { I18nextProvider } from 'react-i18next'
import { type FC, Suspense } from 'react'
import i18n from 'shared/config/i18n/i18n'

// eslint-disable
// eslint-disable-next-line react/display-name
export const TranslationDecorator: FC = (StoryComponent: StoryFn) => (
    <I18nextProvider i18n={i18n}>
        <Suspense fallback={''}>
            <StoryComponent />
        </Suspense>
    </I18nextProvider>

)
