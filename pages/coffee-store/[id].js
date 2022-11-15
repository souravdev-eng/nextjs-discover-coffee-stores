import { useRouter } from 'next/router';

const CoffeeStore = () => {
  const { query } = useRouter();

  return (
    <div>
      <h1>CoffeeStore {query.id}</h1>
    </div>
  );
};

export default CoffeeStore;
