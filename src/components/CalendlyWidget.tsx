import { useEffect } from 'react';

interface CalendlyWidgetProps {
    url: string;
    onClose: () => void;
}

const CalendlyWidget = ({ url, onClose }: CalendlyWidgetProps) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg w-full max-w-4xl h-[80vh] relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div
                    className="calendly-inline-widget w-full h-full"
                    data-url={url}
                />
            </div>
        </div>
    );
};

export default CalendlyWidget;