import { generateStatusCodes } from './statusCodes';
import { generateStatusCodesMarkdownTable } from './statusCodesMarkdownTable';

const run = async () => {
  await generateStatusCodes();
  await generateStatusCodesMarkdownTable();
};

run();
