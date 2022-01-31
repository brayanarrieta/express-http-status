import { generateStatusCodes } from './statusCodes';
import { generateStatusCodesClasses } from './statusCodesClasses';
import { generateStatusCodesClassesMarkdownTable } from './statusCodesClassesMarkdownTable';
import { generateStatusCodesMarkdownTable } from './statusCodesMarkdownTable';

const run = async () => {
  await generateStatusCodes();
  await generateStatusCodesClasses();
  await generateStatusCodesMarkdownTable();
  await generateStatusCodesClassesMarkdownTable();
};

run();
