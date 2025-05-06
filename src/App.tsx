import { useState } from "react";
import "./App.css";
import { buildHistogram, getBlankHistogram } from "./utils/histogram";
import type { Histogram } from "./types/histogram";
import { HistogramForm } from "./components/HistogramForm";
import { HistogramChart } from "./components/HistogramChart";

function App() {
    const [input, setInput] = useState("");
    const [histogram, setHistogram] = useState<Histogram>(getBlankHistogram());

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setHistogram(buildHistogram(input));
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <HistogramForm
                input={input}
                onChange={setInput}
                onSubmit={handleSubmit}
            />

            <HistogramChart histogram={histogram} />
        </div>
    );
}

export default App;
