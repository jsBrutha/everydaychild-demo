export default function FontTest() {
  return (
    <div className="p-8 space-y-6">
      <div>
        <h2 className="text-xl font-bold mb-2">Font Test</h2>
        <p className="mb-4">Testing font configurations...</p>
      </div>

      <div className="space-y-4">
        <div>
          <p className="font-medium text-sm text-gray-600 mb-1">
            Default Font (Satoshi):
          </p>
          <p className="text-lg">
            This text should use the Satoshi font family.
          </p>
          <p className="text-lg font-medium">This is medium weight Satoshi.</p>
          <p className="text-lg font-bold">This is bold weight Satoshi.</p>
        </div>

        <div>
          <p className="font-medium text-sm text-gray-600 mb-1">
            Clash Grotesk (Display Font):
          </p>
          <p className="text-lg font-display">
            This text should use the Clash Grotesk font family.
          </p>
          <p className="text-lg font-display font-medium">
            This is medium weight Clash Grotesk.
          </p>
          <p className="text-lg font-display font-bold">
            This is bold weight Clash Grotesk.
          </p>
        </div>

        <div>
          <p className="font-medium text-sm text-gray-600 mb-1">
            Explicit Font Classes:
          </p>
          <p className="text-lg font-satoshi">
            Explicitly using font-satoshi class.
          </p>
          <p className="text-lg font-clash">
            Explicitly using font-clash class.
          </p>
        </div>
      </div>
    </div>
  );
}
