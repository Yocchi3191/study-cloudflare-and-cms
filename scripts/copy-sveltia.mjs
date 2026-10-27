import { cpSync, rmSync } from 'node:fs';

const src = 'node_modules/@sveltia/cms/dist';
const dest = 'public/admin/vendor/sveltia-cms';

rmSync(dest, { recursive: true, force: true });
cpSync(src, dest, {
	recursive: true,
	filter: (path) => !path.endsWith('.map') && !path.endsWith('.mjs'),
});
