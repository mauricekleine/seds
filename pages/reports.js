import { items as reports } from "../data/reports.json";

export default () => (
  <div>
    Download Reports
    <ul>
      {reports.map(({ fields: { file, title} }) => (
        <li key={title}>
          <a href={file.fields.file.url} target="_blank">
            {title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
