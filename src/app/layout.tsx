import * as React from 'react'
import ThemeRegistry from '@/components/theme-registry/theme.registry'
import AppHeader from '@/components/header/app.header'
import AppFooter from '@/components/footer/app.footer'
import NextAuthWrapper from '@/lib/next.auth.wrapper'
import { ToastProvider } from '@/utils/toast'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body>
                <ThemeRegistry>
                    <NextAuthWrapper>
                        <ToastProvider>
                            <AppHeader />
                            {children}
                            <AppFooter />
                        </ToastProvider>
                    </NextAuthWrapper>
                </ThemeRegistry>
            </body>
        </html>
    )
}
