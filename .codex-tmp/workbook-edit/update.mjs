import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const inputPath = "/Users/lucky/Downloads/VICKY/Review Paper/MongoDB Review Paper.xlsx";
const outputPath = "/Users/lucky/Downloads/VICKY/Review Paper/MongoDB Review Paper.xlsx";
const previewPath = "/Users/lucky/Downloads/VICKY/Review Paper/.codex-tmp/workbook-edit/progress.png";

const input = await FileBlob.load(inputPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const progress = workbook.worksheets.getItem("01 Progress");

progress.getRange("A7:J18").values = [
  [1, "Introduction", "Shreesh", 1.5, 0, null, "Not Started", "Nicky", null, "Draft the shortened introduction and research questions"],
  [2, "Review Methodology", "Shreesh", 1.5, 0, null, "Not Started", "Nicky", null, "Record the concise search and screening procedure"],
  [3, "Foundations of MongoDB", "Jahnavi", 2.5, 0, null, "Not Started", "Dwarkesh", null, "Collect foundational and conceptual sources"],
  [4, "Architecture and Core Capabilities", "Dwarkesh", 3.5, 0, null, "Not Started", "Jahnavi", null, "Research the four grouped capability areas"],
  [5, "Data Modelling and Applications", "Harshitha", 3.5, 0, null, "Not Started", "Nicky", null, "Research modelling trade-offs and representative applications"],
  [6, "Comparative Analysis", "Nicky", 2.5, 0, null, "Not Started", "Dwarkesh", null, "Define comparison criteria and workload conditions"],
  [7, "Trends, Challenges, and Research Gaps", "Nicky", 2.5, 0, null, "Not Started", "All members", null, "Collect evidence for trends, limitations, and gaps"],
  [8, "Future Research Directions", "Nicky", 1.5, 0, null, "Waiting", "All members", null, "Map directions to confirmed research gaps"],
  [9, "Conclusion", "Nicky", 1, 0, null, "Waiting", "Shreesh", null, "Wait for the completed synthesis"],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""]
];

// Preserve the existing progress formulas in the summary area and row progress column.
progress.getRange("F7:F15").formulas = [
  ["=IFERROR(E7/D7,0)"], ["=IFERROR(E8/D8,0)"], ["=IFERROR(E9/D9,0)"],
  ["=IFERROR(E10/D10,0)"], ["=IFERROR(E11/D11,0)"], ["=IFERROR(E12/D12,0)"],
  ["=IFERROR(E13/D13,0)"], ["=IFERROR(E14/D14,0)"], ["=IFERROR(E15/D15,0)"]
];

await workbook.recalculate();
const preview = await workbook.render({ sheetName: "01 Progress", range: "A1:J18", scale: 1, format: "png" });
await fs.writeFile(previewPath, new Uint8Array(await preview.arrayBuffer()));

const check = await workbook.inspect({
  kind: "table",
  range: "01 Progress!A6:J15",
  include: "values,formulas",
  tableMaxRows: 12,
  tableMaxCols: 10,
  maxChars: 12000,
});
console.log(check.ndjson);

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 100 },
  summary: "formula error scan",
});
console.log(errors.ndjson);

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(outputPath);
