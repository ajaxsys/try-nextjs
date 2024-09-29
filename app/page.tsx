import CounterUseState from "@/components/counter_useState";
import CounterStore from "@/components/counter_useStore";

export default function Home() {
  return (<>
    <h1 className="text-3xl">Use State example</h1>
    <CounterUseState />
    <h1 className="text-3xl">Use Store example</h1>
    <CounterStore />
  </>
  );
}

