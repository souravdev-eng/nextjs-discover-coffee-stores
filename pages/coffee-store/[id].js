import { useRouter } from 'next/router';
import coffeeStoresData from '../../data/coffee-stores.json';

export async function getStaticProps(staticProps) {
  const { params } = staticProps;

  return {
    props: {
      CoffeeStore: coffeeStoresData.find((coffeeStore) => {
        return coffeeStore.id.toString() === params.id; //params.id;
      }),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '0' } }, { params: { id: '1' } }],
    fallback: true,
  };
}

const CoffeeStore = (props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>CoffeeStore {router.query.id}</h1>
      <p>{props.CoffeeStore.name}</p>
      <p>{props.CoffeeStore.address}</p>
    </div>
  );
};

export default CoffeeStore;
