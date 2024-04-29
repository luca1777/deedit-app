import { ClerkProvider } from "@clerk/nextjs"


export const metadata = {
    title: "Deedit",
    description: "Prima retea sociala cu povesti"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>

        </ClerkProvider>
    )
}