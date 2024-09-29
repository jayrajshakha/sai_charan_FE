import ProviderLayout from "../lib/ProviderLayout";
import StyledComponentsRegistry from "../lib/StyledComponentsRegistry";
import "./globals.css";

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
          <ProviderLayout>
            <OpeningAnimation />
            {children}
          </ProviderLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
