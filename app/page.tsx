import CounterUseState from "@/components/counter_useState";
import CounterStore from "@/components/counter_useStore";
import CounterStoreDisplayOnly from "@/components/counter_useStoreDisplayOnly";

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

  return (<>
    <h1 className="text-3xl">Use State example</h1>
    <CounterUseState serverCounter={counterValue} />
    <h1 className="text-3xl">Use Store + useEffect example</h1>
    <CounterStore serverCounter={counterValue} />
    <CounterStoreDisplayOnly />
  </>
  );
}

