import { LETTERS } from "../constants/letters";
import type { Histogram } from "../types/histogram";

interface HistogramChartProps {
    histogram: Histogram;
}

export const HistogramChart = ({ histogram }: HistogramChartProps) => {
    return (
        <div
            className="border border-white p-8 gap-4"
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(26, 1fr)",
            }}
        >
            {LETTERS.map((char) => (
                <div
                    key={char}
                    className="text-center flex flex-col justify-end"
                >
                    <div
                        className="bg-blue-400 w-4 text-xs"
                        style={{ height: `${histogram[char] * 20}px` }}
                    >
                        {histogram[char] > 0 && histogram[char]}
                    </div>
                    {char}
                </div>
            ))}
        </div>
    );
};
