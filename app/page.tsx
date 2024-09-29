import CounterUseState from "@/components/counter_useState";
import CounterUseStore from "@/components/counter_useStore";
import StoreProvider from "./StoreProvider";

async function fetchCounterFromDB(): Promise<number> {
  // MOCK
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10); // Mock value from DB
    }, 500);
  });
}

export default async function Home() {
  const counterValue = await fetchCounterFromDB();
  let initStore = { counter: { value: counterValue } }

  return (<StoreProvider preloadedState={initStore}>
    <h1 className="text-3xl">Use State example</h1>
    <CounterUseState />
    <h1 className="text-3xl">Use Store example</h1>
    <CounterUseStore />
    </StoreProvider>
  );
}

