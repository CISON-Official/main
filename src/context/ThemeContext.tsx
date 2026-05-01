import { createContext, useContext, useEffect, useState } from 'react';

export const themes = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system'
};

const ThemeContext = createContext({
  theme: themes.LIGHT,
  setTheme: (_: string) => { },
  cycleTheme: () => { }, // New helper function
  resolvedTheme: themes.LIGHT,
  themes,
  isDark: false,
  isLight: true,
  isSystem: false
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && Object.values(themes).includes(savedTheme)) {
      return savedTheme;
    }
    return themes.SYSTEM;
  });

  const [resolvedTheme, setResolvedTheme] = useState(themes.LIGHT);

  // Helper function to cycle through themes
  const cycleTheme = () => {
    setTheme(currentTheme => {
      switch (currentTheme) {
        case themes.LIGHT:
          return themes.DARK;
        case themes.DARK:
          return themes.SYSTEM;
        case themes.SYSTEM:
          return themes.LIGHT;
        default:
          return themes.LIGHT;
      }
    });
  };

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    let effectiveTheme = theme;
    if (theme === themes.SYSTEM) {
      effectiveTheme = systemPrefersDark ? themes.DARK : themes.LIGHT;
    }

    setResolvedTheme(effectiveTheme);

    if (effectiveTheme === themes.DARK) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  // Listen to system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === themes.SYSTEM) {
        const systemTheme = mediaQuery.matches ? themes.DARK : themes.LIGHT;
        setResolvedTheme(systemTheme);
        if (systemTheme === themes.DARK) {
          document.documentElement.classList.add('dark');
          document.documentElement.classList.remove('light');
        } else {
          document.documentElement.classList.add('light');
          document.documentElement.classList.remove('dark');
        }
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const value = {
    theme,
    setTheme,
    cycleTheme, // Expose cycle helper
    resolvedTheme,
    themes,
    isDark: resolvedTheme === themes.DARK,
    isLight: resolvedTheme === themes.LIGHT,
    isSystem: theme === themes.SYSTEM
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};