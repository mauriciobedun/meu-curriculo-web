import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './styles/themes';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/Header';
// import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

function App() {
  const [theme, setTheme] = useState('dark');
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <div className="App">
        <Header toggleTheme={toggleTheme} isDark={theme === 'dark'} />
        <main>
          {/* <About /> */}
          <Experience />
          <Education />
          <Skills />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;


