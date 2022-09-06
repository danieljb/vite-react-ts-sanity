import "./App.css";
import ContentEditor, { type ConfigProps } from "./ContentEditor";

type AppProps = {
  config?: Partial<ConfigProps>;
};

function App({ config }: AppProps) {
  return (
    <div className="App">
      <ContentEditor config={config} />
    </div>
  );
}

export default App;
