type Props = { children: React.ReactNode };
export default function Badge({ children }: Props) {
    return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm border border-blue-200 bg-blue-50 text-blue-700">
        {children}
        </span>
    );
}
