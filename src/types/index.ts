export interface Project {
  slug:        string;
  title:       string;
  year:        string;
  tags:        string[];
  description: string;
  longDesc:    string;
  image:       string;
  url:         string;
  featured:    boolean;
}

export interface StackItem {
  name: string;
  icon: string;
  level: 'Básico' | 'Intermedio' | 'Avanzado' | 'Experto';
  color: string;
  category: 'Frontend' | 'Backend' | 'Diseño' | 'IA'; // <-- NUEVO
}