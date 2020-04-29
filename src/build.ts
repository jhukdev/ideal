import { tasks } from '@/tasks';
import * as log from '@/utility/logOutput';
import { loadConfig } from '@/utility/loadConfig';
import { validOptions } from '@/utility/validOptions';
import { TaskRunner } from '@/utility/taskRunner';

/* -----------------------------------
 *
 * Profiler
 *
 * -------------------------------- */

process.on('warning', (e) => console.warn(e.stack));

/* -----------------------------------
 *
 * Flags
 *
 * -------------------------------- */

const methodKey = process.argv[2] || '';
const sourcePath = process.argv[3] || '';

/* -----------------------------------
 *
 * Validate
 *
 * -------------------------------- */

if (!tasks[methodKey]) {
   log.error('Unknown build task:', `"${methodKey}"`);

   process.exit(1);
}

/* -----------------------------------
 *
 * Setup
 *
 * -------------------------------- */

const options = loadConfig(methodKey);
const runner = new TaskRunner(methodKey, sourcePath, options);

/* -----------------------------------
 *
 * Validate
 *
 * -------------------------------- */

if (!validOptions(sourcePath, options)) {
   log.error('Missing or invalid arguments');

   process.exit(1);
}

/* -----------------------------------
 *
 * Execute
 *
 * -------------------------------- */

runner.start();
