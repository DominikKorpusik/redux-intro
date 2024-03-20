import { useSelector } from "react-redux";

function Customer() {
  const customer = useSelector((state) => state.customer);
  const { fullName, nationalID, createAt } = customer;

  return <h2>👋 Welcome, {fullName}</h2>;
}

export default Customer;
