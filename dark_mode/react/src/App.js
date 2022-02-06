import {ThemeProvider} from "styled-components";

import {Title, Article, ToggleButton} from "./components";
import {ThemeStyle, GlobalStyle} from "./styles";
import useTheme from "./hooks/useTheme";

function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <ThemeProvider theme={ThemeStyle[theme]}>
    <GlobalStyle />
    <Title>Light / Dark Mode - Toggle Button</Title>
    <ToggleButton onClick={toggleTheme}/>
    <Article>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum optio ab porro magni in sunt ipsam,
      doloremque minima, itaque sapiente consequatur, repellat velit voluptatum accusantium aperiam. Nostrum
      sunt reprehenderit nemo!
    </Article>
    </ThemeProvider>
  );
}

export default App;
