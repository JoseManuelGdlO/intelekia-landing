import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import PrivacyAutobot from "./pages/PrivacyAutobot.tsx";
import TermsAndConditions from "./pages/TermsAndConditions.tsx";
import AccountDeletion from "./pages/AccountDeletion.tsx";
import AccountDeletionAutobot from "./pages/AccountDeletionAutobot.tsx";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <ChatWidget />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/privacidad" element={<PrivacyPolicy />} />
        <Route path="/privacidad-autobot" element={<PrivacyAutobot />} />
        <Route path="/terminos-y-condiciones" element={<TermsAndConditions />} />
        <Route path="/eliminacion-de-cuenta" element={<AccountDeletion />} />
        <Route path="/eliminacion-autobot" element={<AccountDeletionAutobot />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
