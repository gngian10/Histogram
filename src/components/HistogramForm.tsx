interface HistogramFormProps {
    input: string;
    onChange: (value: string) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const HistogramForm = ({
    input,
    onChange,
    onSubmit,
}: HistogramFormProps) => {
    return (
        <form onSubmit={onSubmit} className="flex gap-4">
            <input
                className="bg-gray-500 p-2"
                value={input}
                onChange={(e) => onChange(e.target.value)}
            />
            <button className="bg-blue-500 p-2 hover:bg-blue-600">
                submit
            </button>
        </form>
    );
};
