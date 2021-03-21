import type { AppProps } from "next/app";
import "../styles/globals.css";

interface Props {}

const MyApp: React.FC<Props> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
