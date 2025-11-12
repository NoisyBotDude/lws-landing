export default function FooterNav({ onBack, onNext, canProceed, atStart }) {
    return (
        <div className="mt-6 flex justify-center sm:justify-end">
            <div className="flex gap-3">
                <button onClick={onBack} disabled={atStart} className="px-3 py-2 sm:px-4 sm:py-2 bg-gray-800 text-gray-300 rounded disabled:opacity-50">Back</button>
                <button onClick={onNext} disabled={!canProceed} className={`px-3 py-2 sm:px-4 sm:py-2 rounded ${canProceed ? 'bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] text-white' : 'bg-gray-800 text-gray-500 cursor-not-allowed'}`}>Next</button>
            </div>
        </div>
    );
}
