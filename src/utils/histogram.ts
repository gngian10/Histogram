import { LETTERS } from "../constants/letters";
import type { Histogram } from "../types/histogram";

export function getBlankHistogram(): Histogram {
    return LETTERS.reduce((acc, char) => {
        acc[char] = 0;
        return acc;
    }, {} as Histogram);
}

export function buildHistogram(input: string): Histogram {
    const chars = input
        .toLowerCase()
        .split("")
        .filter((c) => LETTERS.includes(c));

    const histogram = getBlankHistogram();

    for (const char of chars) {
        histogram[char]++;
    }

    return histogram;
}
