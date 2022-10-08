import React, { useEffect } from "react"
import type { AppProps } from "next/app"
import { sendPageViewEvent } from "../lib/ga"
import { useRouter } from "next/router"
import { QueryClient, QueryClientProvider } from "react-query"
import stitches from "../stitches"
import ToastProvider from "../components/providers/ToastProvider"

const Signature = stitches.styled("div", {
  display: "none",
})

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      sendPageViewEvent(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <Component {...pageProps} />
        <Signature>
          Fran Saycon (@fsaycondev) - Fullstack / Web3 Dev &amp; Architect.
          Founder &amp; Director @ http://reactjs.org.ph/. FT Engineering
          Manager || PA/EZU NFT Dev. DM me for dev consultations/work! I leave
          hidden signatures like these for the sites I make. I handle the whole
          frontend for this one; Visit my blog. https://fsaycon.dev. Do drop a
          follow! :D
        </Signature>
      </ToastProvider>
    </QueryClientProvider>
  )
}

export default MyApp
