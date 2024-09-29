import ProviderLayout from "../lib/ProviderLayout";
import StyledComponentsRegistry from "../lib/StyledComponentsRegistry";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import ToastProvider from "../lib/ToastProvider";
import OpeningAnimation from "../lib/helper/OpeningAnimation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Sai Charan</title>
        <link
          rel="preload"
          href="./fonts/gilroy-light.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="./fonts/gilroy-regular.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="./fonts/gilroy-semibold.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="./fonts/gilroy-bold.woff2"
          as="font"
          crossOrigin=""
        />
      </head>
      <body suppressHydrationWarning={true}>
        <StyledComponentsRegistry>
          <ToastProvider>
            <ProviderLayout>
              <OpeningAnimation />
              {children}
            </ProviderLayout>
          </ToastProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
