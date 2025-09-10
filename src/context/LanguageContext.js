import { createContext, useState, useContext } from "react";

const LanguageContext = createContext(null);
export function LanguageProvider({ children }) {
  // localStorage.setItem("ar");
  
  const [language, setLanguage] = useState("en"); // "en" أو "ar"

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
