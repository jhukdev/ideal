import { fromStream as getHash } from 'hasha';
import fileSize from 'filesize';
import { IStream, IResult } from '@/tasks';
import { flattenArray } from '@/utility/flattenArray';

/* -----------------------------------
 *
 * Process
 *
 * -------------------------------- */

async function processStreams(
   tasks: Array<Promise<IStream>>
): Promise<IResult[]> {
   const streams: IStream[] = await Promise.all(tasks);

   const result = streams
      .map((item) => Object.keys(item))
      .map((item, index) =>
         item.map((name) => formatResult(streams[index], name))
      );

   return flattenArray(result).filter(({ stream }) => !!stream);
}

/* -----------------------------------
 *
 * Format
 *
 * -------------------------------- */

function formatResult(stream: IStream, name: string): IResult {
   const data = stream[name];

   return {
      name,
      hash: data && getHash(data, { algorithm: 'md5' }),
      size: data && fileSize(data.readableLength),
      stream: data,
   };
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { processStreams };