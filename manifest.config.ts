import { defineManifest } from "@crxjs/vite-plugin";
import { host_permissions } from "./config";
import pkg from "./package.json";

export default defineManifest({
	manifest_version: 3,
	name: pkg.name,
	version: pkg.version,
	description: pkg.description,
	icons: {
		48: "public/logo.png",
	},
	action: {
		default_icon: {
			48: "public/logo.png",
		},
		default_popup: "src/popup/index.html",
	},
	content_scripts: [
		{
			js: ["src/content/main.tsx"],
			matches: host_permissions,
		},
	],
	host_permissions,
	permissions: ["activeTab"],
});
