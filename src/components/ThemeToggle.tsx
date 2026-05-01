import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { SunIcon, MoonIcon, LaptopIcon } from '@phosphor-icons/react';
import { useTheme } from '@/context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, setTheme, themes } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cycleTheme = () => {
    switch (theme) {
      case themes.LIGHT:
        setTheme(themes.DARK);
        break;
      case themes.DARK:
        setTheme(themes.SYSTEM);
        break;
      case themes.SYSTEM:
        setTheme(themes.LIGHT);
        break;
      default:
        setTheme(themes.LIGHT);
    }
  };

  const getIcon = () => {
    if (theme === themes.SYSTEM) {
      return <LaptopIcon className="h-4 w-4" />;
    }
    if (theme === themes.DARK) {
      return <MoonIcon className="h-4 w-4" />;
    }
    return <SunIcon className="h-4 w-4" />;
  };

  const getThemeLabel = () => {
    switch (theme) {
      case themes.LIGHT:
        return 'Light';
      case themes.DARK:
        return 'Dark';
      case themes.SYSTEM:
        return 'System';
      default:
        return 'Theme';
    }
  };

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="gap-2 w-24">
        <div className="h-4 w-4 animate-pulse bg-muted rounded" />
      </Button>
    );
  }

  return (
    <motion.div whileTap={{ scale: 0.95 }}>
      <Button
        variant="ghost"
        size="sm"
        onClick={cycleTheme}
        className="gap-2 relative overflow-hidden group"
        aria-label={`Current theme: ${getThemeLabel()}. Click to cycle themes`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
          >
            {getIcon()}
            <span className="hidden sm:inline">{getThemeLabel()}</span>
          </motion.div>
        </AnimatePresence>
        
        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background">
          <span className="text-xs">
            → {theme === themes.LIGHT ? 'Dark' : theme === themes.DARK ? 'System' : 'Light'}
          </span>
        </span>
      </Button>
    </motion.div>
  );
};

export default ThemeToggle;