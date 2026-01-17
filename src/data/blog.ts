// Your technical writing samples

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "react-patterns",
    title: "Modern React Patterns for Clean Code",
    excerpt: "Simple patterns that make React code easier to read and maintain",
    date: "2025-01-15",
    readTime: "5 min read",
    category: "React.js",
    content: `# Modern React Patterns for Clean Code Writing clean, maintainable React code doesn't have to be complicated. Here are some simple patterns I use every day.
    ## Custom Hooks for Reusable Logic

    Instead of repeating logic across components, extract it into custom hooks:

    \`\`\`javascript
    // Simple data fetching hook
    const useApi = (url) => {
      const [data, setData] = useState(null);
      const [loading, setLoading] = useState(true);
      
      useEffect(() => {
        fetch(url)
          .then(res => res.json())
          .then(data => {
            setData(data);
            setLoading(false);
          });
      }, [url]);
      
      return { data, loading };
    };

    // Usage in component
    const UserProfile = () => {
      const { data: user, loading } = useApi('/api/user');
      
      if (loading) return <div>Loading...</div>;
      return <div>Hello {user.name}!</div>;
    };
    \`\`\`

    ## Simple State Management

    For most apps, React's built-in state is enough:

    \`\`\`javascript
    const AppProvider = ({ children }) => {
      const [user, setUser] = useState(null);
      const [theme, setTheme] = useState('light');
      
      return (
        <AppContext.Provider value={{ user, setUser, theme, setTheme }}>
          {children}
        </AppContext.Provider>
      );
    };
    \`\`\`

    These simple patterns will make your code much easier to work with.`
  },
  {
    id: "typescript-tips",
    title: "TypeScript Tips for Better Code",
    excerpt: "Practical TypeScript tips that actually make development easier",
    date: "2025-01-10",
    readTime: "4 min read",
    category: "TypeScript",
    content: `# TypeScript Tips for Better Code

    TypeScript doesn't have to be scary. Here are some practical tips that make coding easier, not harder.

    ## Start Simple

    Begin with basic types, then add more as needed:

    \`\`\`typescript
    // Start simple
    interface User {
      name: string;
      email: string;
    }

    // Add more later
    interface User {
      name: string;
      email: string;
      avatar?: string; // Optional
      createdAt: Date;
    }
    \`\`\`

    ## Use Type Helpers

    TypeScript has built-in helpers that save time:

    \`\`\`typescript
    // Pick only what you need
    type UserPreview = Pick<User, 'name' | 'avatar'>;

    // Make everything optional
    type UserUpdate = Partial<User>;
    \`\`\`

    ## Simple Generic Components

    Generics are just variables for types:

    \`\`\`typescript
    interface ButtonProps<T> {
      onClick: (data: T) => void;
      data: T;
    }

    const Button = <T,>({ onClick, data }: ButtonProps<T>) => {
      return <button onClick={() => onClick(data)}>Click me</button>;
    };
    \`\`\`

    Start simple, add complexity only when you need it.`
  },
  {
    id: "modern-react-patterns",
    title: "Modern React Patterns for Scalable Applications",
    excerpt:
      "Exploring advanced React patterns and best practices for building maintainable, scalable frontend applications.",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "React.js",
    content: `Modern React development has evolved significantly over the years, introducing powerful patterns that help developers build more maintainable and scalable applications.

    ## Custom Hooks for Reusability

    One of the most powerful patterns in modern React is the use of custom hooks. They allow you to extract component logic into reusable functions:

    \`\`\`javascript
    const useLocalStorage = (key, initialValue) => {
      const [storedValue, setStoredValue] = useState(() => {
        try {
          const item = window.localStorage.getItem(key);
          return item ? JSON.parse(item) : initialValue;
        } catch (error) {
          return initialValue;
        }
      });

      const setValue = (value) => {
        try {
          setStoredValue(value);
          window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
          console.error('Error saving to localStorage', error);
        }
      };

      return [storedValue, setValue];
    };
    \`\`\`

    ## Compound Components Pattern

    This pattern is perfect for building flexible, reusable UI components:

    \`\`\`javascript
    const Modal = ({ children, isOpen, onClose }) => {
      return isOpen ? (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            {children}
          </div>
        </div>
      ) : null;
    };

    Modal.Header = ({ children }) => <div className="modal-header">{children}</div>;
    Modal.Body = ({ children }) => <div className="modal-body">{children}</div>;
    Modal.Footer = ({ children }) => <div className="modal-footer">{children}</div>;
    \`\`\`

    ## State Management with Zustand

    For complex state management, Zustand provides a simple yet powerful solution:

    \`\`\`javascript
    import { create } from 'zustand';

    const useStore = create((set) => ({
      user: null,
      isLoading: false,
      setUser: (user) => set({ user }),
      setLoading: (isLoading) => set({ isLoading }),
      logout: () => set({ user: null }),
    }));
    \`\`\`

    These patterns, when used correctly, can significantly improve code organization, reusability, and maintainability in React applications.`
  },
  {
    id: "typescript-best-practices",
    title: "TypeScript Best Practices for Frontend Development",
    excerpt:
      "Essential TypeScript practices that every frontend developer should know to write better, more maintainable code.",
    date: "2025-01-10",
    readTime: "6 min read",
    category: "TypeScript",
    content: `TypeScript has become an essential tool for modern frontend development. Here are some best practices that will help you write better TypeScript code.

    ## Proper Type Definitions

    Always define proper interfaces for your data structures:

    \`\`\`typescript
    interface User {
      id: string;
      name: string;
      email: string;
      avatar?: string;
      createdAt: Date;
    }

    interface ApiResponse<T> {
      data: T;
      success: boolean;
      message?: string;
    }
    \`\`\`

    ## Generic Components

    Use generics to create reusable components:

    \`\`\`typescript
    interface TableProps<T> {
      data: T[];
      columns: Column<T>[];
      onRowClick?: (row: T) => void;
    }

    const Table = <T,>({ data, columns, onRowClick }: TableProps<T>) => {
      return (
        <table>
          {/* Table implementation */}
        </table>
      );
    };
    \`\`\`

    ## Strict Configuration

    Always use strict TypeScript configuration:

    \`\`\`json
    {
      "compilerOptions": {
        "strict": true,
        "noImplicitAny": true,
        "noImplicitReturns": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true
      }
    }
    \`\`\`

    These practices will help you catch errors early and write more maintainable code.`
  },
  {
    id: "performance-optimization",
    title: "Frontend Performance Optimization Techniques",
    excerpt:
      "Proven strategies to improve your web application's performance and user experience.",
    date: "2025-01-05",
    readTime: "10 min read",
    category: "Performance",
    content: `Performance optimization is crucial for delivering excellent user experiences. Here are key techniques every frontend developer should master.

    ## Code Splitting

    Implement code splitting to reduce initial bundle size:

    \`\`\`javascript
    import { lazy, Suspense } from 'react';

    const Dashboard = lazy(() => import('./Dashboard'));
    const Profile = lazy(() => import('./Profile'));

    const App = () => (
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>
    );
    \`\`\`

    ## Image Optimization

    Optimize images for better loading performance:

    \`\`\`javascript
    const OptimizedImage = ({ src, alt, ...props }) => {
      return (
        <picture>
          <source srcSet={\`\${src}?format=webp\`} type="image/webp" />
          <source srcSet={\`\${src}?format=avif\`} type="image/avif" />
          <img 
            src={src} 
            alt={alt} 
            loading="lazy"
            {...props}
          />
        </picture>
      );
    };
    \`\`\`

    ## Memoization

    Use React.memo and useMemo for expensive operations:

    \`\`\`javascript
    const ExpensiveComponent = React.memo(({ data }) => {
      const processedData = useMemo(() => {
        return data.map(item => ({
          ...item,
          processed: heavyComputation(item)
        }));
      }, [data]);

      return <div>{/* Render processed data */}</div>;
    });
    \`\`\`

    ## Virtual Scrolling

    For large lists, implement virtual scrolling:

    \`\`\`javascript
    const VirtualList = ({ items, itemHeight = 50 }) => {
      const [scrollTop, setScrollTop] = useState(0);
      const containerHeight = 400;
      
      const startIndex = Math.floor(scrollTop / itemHeight);
      const endIndex = Math.min(
        startIndex + Math.ceil(containerHeight / itemHeight),
        items.length
      );

      const visibleItems = items.slice(startIndex, endIndex);

      return (
        <div 
          style={{ height: containerHeight, overflow: 'auto' }}
          onScroll={(e) => setScrollTop(e.target.scrollTop)}
        >
          <div style={{ height: items.length * itemHeight }}>
            <div style={{ transform: \`translateY(\${startIndex * itemHeight}px)\` }}>
              {visibleItems.map((item, index) => (
                <div key={startIndex + index} style={{ height: itemHeight }}>
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
    \`\`\`

    These optimization techniques can significantly improve your application's performance and user experience.`
  }
];

// Helper function to get blog post by ID
export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.id === id);
};

// Helper function to get posts by category
export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter((post) => post.category === category);
};
