import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchCoins } from "../api";
import ToggleTheme from "../components/ToggleTheme";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: grid;
  margin: 40px 0px;
  padding: 0px 10px;
  grid-template-columns: 1fr 6fr 1fr;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  box-shadow: 2px 2px 10px lightgray;
  border-radius: 15px;
  margin-bottom: 15px;
  font-weight: 550;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  font-weight: 600;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 20px;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  /* const [coins, setCoins] = useState<ICoin[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const responce = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await responce.json();
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }, []); */
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);
  return (
    <Container>
      <Helmet>
        <title>Crypto</title>
      </Helmet>
      <Header>
        <div></div>
        <Title>Crypto</Title>
        <ToggleTheme />
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                <Img
                  src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}
export default Coins;
