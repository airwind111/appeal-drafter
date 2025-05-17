export default function Home() {
  return (
    <main className="min-h-screen bg-white p-6 text-black">
      <h1 className="text-3xl font-bold mb-4">Appeal Drafting Assistant</h1>

      <form className="space-y-4">
        <div>
          <label className="block font-semibold">Type of Appeal:</label>
          <select className="border p-2 w-full">
            <option value="">Select...</option>
            <option value="Regular">Regular Civil Appeal</option>
            <option value="Misc">Miscellaneous Appeal</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">Who is Filing the Appeal:</label>
          <select className="border p-2 w-full">
            <option value="">Select...</option>
            <option value="Plaintiff">Plaintiff</option>
            <option value="Defendant">Defendant</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">Upload Judgment PDF:</label>
          <input type="file" accept=".pdf" className="border p-2 w-full" />
        </div>

        <div>
          <label className="block font-semibold">Additional Grounds (optional):</label>
          <textarea className="border p-2 w-full" rows={4}></textarea>
        </div>

        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Generate Appeal Draft
        </button>
      </form>
    </main>
  );
}
