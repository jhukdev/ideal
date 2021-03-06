import { Configuration } from 'webpack';

/* -----------------------------------
 *
 * IOptions
 *
 * -------------------------------- */

interface IOptions {
  sourcePath: string;
  sourceDirectory?: string;
  outputPath: string;
  release: boolean;
  sourceMap: boolean;
  cssModules: boolean;
  watch: boolean;
  watchPath?: string;
  verbose: boolean;
  pathAlias: string;
  filePrefix?: string;
  includePath?: string;
  skipManifest: boolean;
  manifestPath: string;
  msbuildVersion?: string;
  msbuildPackage: boolean;
  renameFile?: (name: string, path: string) => string;
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { IOptions };
