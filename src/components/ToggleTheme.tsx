import { useRecoilState } from "recoil";
import { isDarkAtom } from "../theme";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const ThemeToggleBtn = styled.span`
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function ToggleTheme() {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);

  const handleThemeMode = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <Container>
      <ThemeToggleBtn onClick={handleThemeMode}>
        {isDark === true ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </ThemeToggleBtn>
    </Container>
  );
}

export default ToggleTheme;
