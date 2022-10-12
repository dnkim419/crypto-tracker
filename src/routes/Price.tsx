import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinTickers } from "../api";

const PriceChangeItem = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.tabColor};
  padding: 20px 30px;
  border-radius: 10px;
  margin-bottom: 10px;

  span:first-child span:last-child {
    color: ${(props) => props.theme.accentColor};
    font-size: larger;
    font-weight: 600;
    margin-left: 2px;
  }

  span:last-child {
    font-size: larger;
    font-weight: 600;
  }
`;

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Price() {
  const { coinId } = useParams<{ coinId: string }>();
  const { isLoading, data } = useQuery<PriceData>(
    ["tickers", coinId],
    () => fetchCoinTickers(coinId),
    {
      refetchInterval: 5000,
    }
  );
  return (
    <>
      <PriceChangeItem>
        <span>
          <span>Percent Change in </span>
          <span>15m</span>
        </span>
        <span>{data?.quotes.USD.percent_change_15m}</span>
      </PriceChangeItem>
      <PriceChangeItem>
        <span>
          <span>Percent Change in </span>
          <span>30m</span>
        </span>
        <span>{data?.quotes.USD.percent_change_30m}</span>
      </PriceChangeItem>
      <PriceChangeItem>
        <span>
          <span>Percent Change in </span>
          <span>1h</span>
        </span>
        <span>{data?.quotes.USD.percent_change_1h}</span>
      </PriceChangeItem>
      <PriceChangeItem>
        <span>
          <span>Percent Change in </span>
          <span>6h</span>
        </span>
        <span>{data?.quotes.USD.percent_change_6h}</span>
      </PriceChangeItem>
      <PriceChangeItem>
        <span>
          <span>Percent Change in </span>
          <span>12h</span>
        </span>
        <span>{data?.quotes.USD.percent_change_12h}</span>
      </PriceChangeItem>
      <PriceChangeItem>
        <span>
          <span>Percent Change in </span>
          <span>24h</span>
        </span>
        <span>{data?.quotes.USD.percent_change_24h}</span>
      </PriceChangeItem>
      <PriceChangeItem>
        <span>
          <span>Percent Change in </span>
          <span>7d</span>
        </span>
        <span>{data?.quotes.USD.percent_change_7d}</span>
      </PriceChangeItem>
      <PriceChangeItem>
        <span>
          <span>Percent Change in </span>
          <span>30d</span>
        </span>
        <span>{data?.quotes.USD.percent_change_30d}</span>
      </PriceChangeItem>
      <PriceChangeItem>
        <span>
          <span>Percent Change in </span>
          <span>1y</span>
        </span>
        <span>{data?.quotes.USD.percent_change_1y}</span>
      </PriceChangeItem>
    </>
  );
}

export default Price;
