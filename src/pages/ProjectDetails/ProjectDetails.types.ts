export interface ProjectTag {
  type: string;
  value: string;
  label: string;
}

export interface Project {
  title: string;
  slug: string;
  tags: ProjectTag[];
}
