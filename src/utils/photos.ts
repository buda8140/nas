export interface PhotoEntry {
  src: string;
  filename: string;
}

function globToEntries(globResult: Record<string, string>): PhotoEntry[] {
  return Object.entries(globResult)
    .map(([path, src]) => ({
      src,
      filename: path.split("/").at(-1) ?? path,
    }))
    .sort((a, b) =>
      a.filename.localeCompare(b.filename, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    );
}

// Each function contains a static glob literal — Vite requires string literals
// at compile time to discover which files to include in the bundle.

export function getCoverPhotos(): PhotoEntry[] {
  const modules = import.meta.glob<string>(
    "../assets/photos/cover/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    { eager: true, query: "?url", import: "default" }
  );
  return globToEntries(modules);
}

export function getCarouselPhotos(): PhotoEntry[] {
  const modules = import.meta.glob<string>(
    "../assets/photos/carousel/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    { eager: true, query: "?url", import: "default" }
  );
  return globToEntries(modules);
}

export function getMemoryPhotos(): PhotoEntry[] {
  const modules = import.meta.glob<string>(
    "../assets/photos/memories/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    { eager: true, query: "?url", import: "default" }
  );
  return globToEntries(modules);
}
