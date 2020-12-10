import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCandies } from "../store/currencySlice";

const CurrencyGenerator = () => {
  const dispatch = useDispatch();
  const candiesPerSecond = 1;

  const AddCurrencies = () => {
    dispatch(addCandies(candiesPerSecond));
    setTimeout(() => {
      AddCurrencies();
    }, 100);
  };

  useEffect(() => AddCurrencies(), []);

  return null;
};

export default CurrencyGenerator;
