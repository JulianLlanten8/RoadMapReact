import { useFetch } from "../src/hooks/useFetch";

export const MultipleCustomHoook = () => {
  const { data, isloading, hasError } = useFetch(
    "https://api.breakingbadquotes.xyz/v1/quotes/5"
  );

  console.log(data, isloading, hasError);

  return (
    <>
      <h1>BreakingBad quotes</h1>
      {/* https://api.breakingbadquotes.xyz/v1/quotes/5 */}
      <hr />
    </>
  );
};
