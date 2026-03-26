// Replace VSCode component with an iframe
export default function VSCode() {
  return (
    <div className="h-full w-full bg-gray-900">
      <iframe
        src="https://github1s.com/daprior/danielprior-macos/blob/main/README.md"
        className="w-full h-full border-0"
        title="VSCode Project View"
      />
    </div>
  )
}
