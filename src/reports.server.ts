export async function reports() {
  const space = process.env.CONTENTFUL_SPACE_ID;
  const token = process.env.CONTENTFUL_ACCESS_TOKEN;
  if (!space || !token) return { entries: { items: [] } };
  try {
    const url = new URL(`https://cdn.contentful.com/spaces/${space}/environments/master/entries`);
    url.searchParams.set("content_type", "reports");
    const response = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
    if (!response.ok) throw new Error("Contentful request failed");
    const entries = (await response.json()) as {
      items: { fields: { code: string; title: string; file: { sys: { id: string } } }; sys: { id: string } }[];
      includes?: { Asset?: { sys: { id: string }; fields: { file: { fileName: string; url: string } } }[] };
    };
    // Contentful's REST response uses links; the old SDK resolved the report's asset.
    const assets = new Map(entries.includes?.Asset?.map((asset) => [asset.sys.id, asset]));
    return {
      entries: {
        items: entries.items.map((item) => ({
          ...item,
          fields: { ...item.fields, file: assets.get((item.fields.file as { sys?: { id?: string } })?.sys?.id ?? "") },
        })),
      },
    };
  } catch {
    return { entries: { items: [] } };
  }
}
