import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const inputPath = "/Users/lucky/Downloads/VICKY/Review Paper/MongoDB Review Paper.xlsx";
const input = await FileBlob.load(inputPath);
const workbook = await SpreadsheetFile.importXlsx(input);

const overview = await workbook.inspect({
  kind: "workbook,sheet,table",
  maxChars: 12000,
  tableMaxRows: 8,
  tableMaxCols: 12,
  tableMaxCellChars: 120,
});
console.log(overview.ndjson);

const searchLog = workbook.worksheets.getItem("02 Search Log");
const used = searchLog.getUsedRange();
console.log(JSON.stringify({
  searchLogUsedRange: used.address,
  values: used.values,
}, null, 2));
