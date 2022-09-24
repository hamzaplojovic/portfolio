import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { App } from "./components/App";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <MantineProvider withGlobalStyles withNormalizeCSS>
        <App />
    </MantineProvider>
);
