import Hello from "./components/hello";

export default function Home() {
  console.log('What component am i? --- server/client ')
  return (
    <>
      <h1>Welcome to NextJS</h1>
      <Hello />
    </>
  );
}
