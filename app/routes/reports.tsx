import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { FileArrowDown } from "phosphor-react";

import Card from "~/components/ui/card";

type LoaderData = {
  entries: {
    items: {
      fields: {
        code: string;
        file: {
          fields: {
            file: {
              fileName: string;
              url: string;
            };
          };
        };
        title: string;
      };
      sys: {
        id: string;
      };
    }[];
  };
};

export const loader: LoaderFunction = async () => {
  const space = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

  if (!space || !accessToken) {
    return json({ entries: { items: [] } });
  }

  try {
    const client = require("contentful").createClient({
      space,
      accessToken,
    });

    const entries = await client.getEntries({
      content_type: "reports",
    });

    return json({ entries });
  } catch (error) {
    return json({ entries: { items: [] } });
  }
};

export const meta: MetaFunction = () => ({
  title: "SEDS | Reports",
});

function FileType({ children }: { children: string }) {
  return <p className="mt-2 font-normal text-content-secondary leading-6">{children}</p>;
}

function Reports() {
  const { entries } = useLoaderData<LoaderData>();

  return (
    <div className="pt-4">
        <h2 className="font-display">Reports and transparency</h2>

        <p className="text-content-secondary mb-6">
          Explore annual reports and project updates that show how our programs are funded and what they achieve.
        </p>

        {entries.items.length === 0 ? (
          <p className="mt-4 text-content-secondary leading-6">
            Reports will be published here as they are released.
          </p>
      ) : (
        entries.items
          .sort(({ fields: { code: code1 } }, { fields: { code: code2 } }) =>
            code1 > code2 ? 1 : -1
          )
          .map(({ fields: { file, title }, sys: { id } }) => (
            <a
              href={file.fields.file.url}
              key={id}
              rel="noreferrer"
              target="_blank"
            >
              <Card>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{title}</span>

                  <FileArrowDown className="text-green-600 h-8 w-8" />
                </div>

                <FileType>{`.${file.fields.file.fileName
                  .split(".")
                  .pop()}`}</FileType>
              </Card>
            </a>
          ))
      )}
    </div>
  );
}

export default Reports;
