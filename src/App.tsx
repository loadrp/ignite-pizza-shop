import { RouterProvider } from "react-router-dom";
import { router } from './routes'
import "./global.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/theme-provider";

export function App() {
  return (  
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <ThemeProvider defaultTheme="dark" storageKey="pizza-shop-theme">
      <RouterProvider router={router}/>
      <Toaster richColors containerAriaLabel="Notificação"/>
      </ThemeProvider>
     
    </HelmetProvider>
     
  );
}
