import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme.js";

import { Container, Title, Subtitle, User, SwitchButton } from "./styles.js";

function Example() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Container>
        <Title>{theme} mode</Title>
        <SwitchButton onClick={() => toggleTheme()}>
          {theme === "dark" ? (
            <img src="./assets/moon.svg" />
          ) : (
            <img src="https://imgur.com/Rrd7TEZ" />
          )}
        </SwitchButton>
        <br></br>
        <Subtitle className="mt-4">
          by: 
          <User
            href="https://github.com/MariaIsabel68"
            target="_blank"
            className="ml-2"
          >
              @mid.oliveira
          </User>
        </Subtitle>
      </Container>
    </ThemeProvider>
  );
}

export default Example;