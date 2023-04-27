declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"post": {
"how-to-generate-career-profile-through-multiple-data-sources.md": {
  id: "how-to-generate-career-profile-through-multiple-data-sources.md",
  slug: "how-to-generate-career-profile-through-multiple-data-sources",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"how-to-win-in-job-search-with-ai.md": {
  id: "how-to-win-in-job-search-with-ai.md",
  slug: "how-to-win-in-job-search-with-ai",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"latest-employment-environment-analysis-for-recent-graduates.md": {
  id: "latest-employment-environment-analysis-for-recent-graduates.md",
  slug: "latest-employment-environment-analysis-for-recent-graduates",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"through-integrating-higher-education-boutique-courses-to-empower-jobflow-ai-platform.mdx": {
  id: "through-integrating-higher-education-boutique-courses-to-empower-jobflow-ai-platform.mdx",
  slug: "through-integrating-higher-education-boutique-courses-to-empower-jobflow-ai-platform",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"why-build-the-jobflow-ai-platform.md": {
  id: "why-build-the-jobflow-ai-platform.md",
  slug: "why-build-the-jobflow-ai-platform",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
