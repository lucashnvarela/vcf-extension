import crxLogo from "@/assets/crx.svg";
import pkg from "../../package.json";
import "./App.css";

export default function App() {
	return (
		<>
			<div className="header">
				<a href="https://crxjs.dev/vite-plugin" target="_blank" rel="noreferrer">
					<img src={crxLogo} className="logo" alt="crx logo" />
				</a>
				<h2 className="name">{pkg.name}</h2>
			</div>
			<div className="version">
				<code>v{pkg.version}</code>
			</div>
		</>
	);
}
