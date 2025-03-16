import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ActiveTabProvider } from "./context/ActiveTabContext.jsx";
import { CollapseStateProvider } from "./context/CollapseStateContext.jsx";
import EditorProvider from "./context/EditorContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/AuthContext.jsx";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Toaster position="top-center" />
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CollapseStateProvider>
          <ActiveTabProvider>
            <EditorProvider>
              <div className="w-full h-screen " data-theme="light">
                <App />
              </div>
            </EditorProvider>
          </ActiveTabProvider>
        </CollapseStateProvider>
      </AuthProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
