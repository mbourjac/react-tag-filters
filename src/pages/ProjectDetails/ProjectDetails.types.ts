export interface TagType {
  value: string;
  label: string;
}

export interface ProjectTag {
  type: TagType['value'];
  value: string;
  label: string;
}

export interface Project {
  title: string;
  slug: string;
  tags: ProjectTag[];
}
