import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";
const input = await FileBlob.load("/Users/lucky/Downloads/VICKY/Review Paper/MongoDB Review Paper (1).xlsx");
const wb = await SpreadsheetFile.importXlsx(input);
const o = await wb.inspect({kind:"workbook,sheet,table",maxChars:18000,tableMaxRows:8,tableMaxCols:14,tableMaxCellChars:120});
console.log(o.ndjson);
for (const n of ["01 Progress","02 Search Log","03 Source Screening","04 Evidence Matrix","05 Handoff"]) {
  const s = wb.worksheets.getItem(n); const r=s.getUsedRange(); console.log(`---${n} ${r.address}---`); console.log(JSON.stringify(r.values.slice(0,12),null,2));
}
