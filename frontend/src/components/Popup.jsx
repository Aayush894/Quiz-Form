const Popup = ({ onRequestFullScreen }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <p className="mb-4">Click the button below to enter full screen mode.</p>
        <button
          onClick={onRequestFullScreen}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Enter Full Screen
        </button>
      </div>
    </div>
  );
};

export default Popup;
