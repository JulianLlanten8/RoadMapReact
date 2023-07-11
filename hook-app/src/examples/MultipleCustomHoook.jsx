import { useFetch, useCounter } from "../hooks";
import { Quote, LoandingQuote } from "../components";

export const MultipleCustomHoook = () => {
  const { counter, increment } = useCounter(1);
  const { data, isloading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  console.log(data, isloading, hasError);

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad quotes</h1>
      <hr />

      {isloading ? <LoandingQuote /> : <Quote quote={quote} author={author} />}

      <button className="btn btn-primary" onClick={() => increment(1)}>
        Next quote
      </button>
    </>
  );
};
