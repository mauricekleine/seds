type Asset = { sys: { id: string }; fields: { file: { fileName: string; url: string } } };
// Contentful serves protocol-relative asset URLs; only https links reach the page.
function httpsAsset(asset: Asset | undefined) {
  const url = asset?.fields?.file?.url;
  if (typeof url !== "string" || typeof asset?.fields.file.fileName !== "string") return undefined;
  try {
    const parsed = new URL(url, "https://assets.ctfassets.net");
    if (parsed.protocol !== "https:") return undefined;
    return { ...asset, fields: { ...asset.fields, file: { ...asset.fields.file, url: parsed.href } } };
  } catch {
    return undefined;
  }
}
export async function reports() {
  const space = process.env.CONTENTFUL_SPACE_ID;
  const token = process.env.CONTENTFUL_ACCESS_TOKEN;
  if (!space || !token) return { entries: { items: [] } };
  try {
    const url = new URL(`https://cdn.contentful.com/spaces/${space}/environments/master/entries`);
    url.searchParams.set("content_type", "reports");
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) throw new Error("Contentful request failed");
    const entries = (await response.json()) as {
      items: { fields: { code: string; title: string; file: { sys: { id: string } } }; sys: { id: string } }[];
      includes?: { Asset?: Asset[] };
    };
    // Contentful's REST response uses links; the old SDK resolved the report's asset.
    const assets = new Map(entries.includes?.Asset?.map((asset) => [asset.sys.id, asset]));
    return {
      entries: {
        items: entries.items.flatMap((item) => {
          const file = httpsAsset(assets.get((item.fields.file as { sys?: { id?: string } })?.sys?.id ?? ""));
          return file ? [{ ...item, fields: { ...item.fields, file } }] : [];
        }),
      },
    };
  } catch {
    return { entries: { items: [] } };
  }
}
