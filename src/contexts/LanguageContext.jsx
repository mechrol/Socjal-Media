import React, { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en')

  const languages = [
    { 
      code: 'en', 
      name: 'English', 
      flag: 'https://flagcdn.com/w40/us.png',
      flagAlt: 'United States flag'
    },
    { 
      code: 'pl', 
      name: 'Polish', 
      flag: 'https://flagcdn.com/w40/pl.png',
      flagAlt: 'Poland flag'
    },
    { 
      code: 'es', 
      name: 'Español', 
      flag: 'https://flagcdn.com/w40/es.png',
      flagAlt: 'Spain flag'
    },
    { 
      code: 'fr', 
      name: 'Français', 
      flag: 'https://flagcdn.com/w40/fr.png',
      flagAlt: 'France flag'
    },
    { 
      code: 'de', 
      name: 'Deutsch', 
      flag: 'https://flagcdn.com/w40/de.png',
      flagAlt: 'Germany flag'
    },
    { 
      code: 'it', 
      name: 'Italiano', 
      flag: 'https://flagcdn.com/w40/it.png',
      flagAlt: 'Italy flag'
    },
    { 
      code: 'pt', 
      name: 'Português', 
      flag: 'https://flagcdn.com/w40/pt.png',
      flagAlt: 'Portugal flag'
    },
    { 
      code: 'id', 
      name: 'Indonesian', 
      flag: 'https://flagcdn.com/w40/id.png',
      flagAlt: 'Indonesia flag'
    },
    { 
      code: 'da', 
      name: 'Dansk', 
      flag: 'https://flagcdn.com/w40/dk.png',
      flagAlt: 'Denmark flag'
    }
  ]

  const changeLanguage = (languageCode) => {
    setCurrentLanguage(languageCode)
  }

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === currentLanguage) || languages[0]
  }

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      languages,
      changeLanguage,
      getCurrentLanguage
    }}>
      {children}
    </LanguageContext.Provider>
  )
}
