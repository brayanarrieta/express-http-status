/* eslint-disable no-console */
import markdownTable from 'markdown-table';
import fs from 'fs';
import { STATUS_CODES_CLASSES } from '../../constants';
import { StatusCodeClassObj } from '../../types';

const START_PIVOT = '<!-- HTTP_RESPONSE_STATUS_CODES_CLASSES_MARKDOWN_TABLE:START -->';
const END_PIVOT = '<!-- HTTP_RESPONSE_STATUS_CODES_CLASSES_MARKDOWN_TABLE:END -->';

const getRegex = () => new RegExp(`${START_PIVOT}(.|\n)*?${END_PIVOT}`, 'g');

export const generateStatusCodesClassesMarkdownTable = async () => {
  try {
    const table = markdownTable([
      ['HTTP Status Code Class', 'Key', 'Value'],
      ...STATUS_CODES_CLASSES.map(
        ({
          jsdoc, key, code,
        }: StatusCodeClassObj) => (
          [jsdoc.documentation, key, `'${code}'`]
        ),
      ),
    ]);

    const regex = getRegex();

    const readmeFileData = fs.readFileSync('./README.md', 'utf8');
    fs.writeFileSync('./README.md', readmeFileData.replace(regex, `${START_PIVOT}\n${table}\n${END_PIVOT}`));

    console.log('Successfully updated README.md');
  } catch (error) {
    console.log('Error updating the README.md');
  }
};
