import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";
const input = await FileBlob.load("/Users/lucky/Downloads/VICKY/Review Paper/MongoDB Review Paper.xlsx");
const workbook = await SpreadsheetFile.importXlsx(input);
for (const name of ["03 Source Screening", "04 Evidence Matrix", "05 Nicky Handoff"]) {
  const sheet = workbook.worksheets.getItem(name);
  const used = sheet.getUsedRange();
  console.log(`--- ${name} ${used.address} ---`);
  console.log(JSON.stringify(used.values.slice(0, 8), null, 2));
}
