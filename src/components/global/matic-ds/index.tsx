// https://github.com/brijr/craft/blob/main/craft/craft.css#L11
// matic-ds, v0.1
// This is a design system for building responsive layouts in React

import React from 'react';

import { cn } from '@/lib/utils';

// Types for component props

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

type MainProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  width?: 'boxed' | 'full';
};

type ArticleProps = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  html?: { __html: string };
};

type BoxProps = {
  children: React.ReactNode;
  className?: string;
  direction?:
    | 'row'
    | 'col'
    | {
        base?: 'row' | 'col';
        sm?: 'row' | 'col';
        md?: 'row' | 'col';
        lg?: 'row' | 'col';
        xl?: 'row' | 'col';
        '2xl'?: 'row' | 'col';
      };
  wrap?:
    | boolean
    | {
        base?: boolean;
        sm?: boolean;
        md?: boolean;
        lg?: boolean;
        xl?: boolean;
        '2xl'?: boolean;
      };
  gap?:
    | number
    | {
        base?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
        '2xl'?: number;
      };
  cols?:
    | number
    | {
        base?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
        '2xl'?: number;
      };
  rows?:
    | number
    | {
        base?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
        '2xl'?: number;
      };
};

// Layout Component
// This component sets up the basic HTML structure and applies global styles

export const Layout = ({ children, className }: LayoutProps) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn('scroll-smooth antialiased focus:scroll-auto', className)}
    >
      {children}
    </html>
  );
};

// Main Component
// This component is used for the main content area of the page

export const Main = ({ children, className, id }: MainProps) => {
  return (
    <main className={cn(className)} id={id}>
      {children}
    </main>
  );
};

// Section Component
// This component is used for defining sections within the page

export const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section className={cn('section', className)} id={id}>
      {children}
    </section>
  );
};

// Container Component
// This component is used for containing content with a maximum width and padding

export const Container = ({ children, className, id, width }: ContainerProps) => {
  return (
    <div className={cn('container', { 'max-w-full': width === 'full' }, className)} id={id}>
      {children}
    </div>
  );
};

// Article Component
// This component is used for rendering articles with optional dangerouslySetInnerHTML

export const Article = ({ children, className, id, html }: ArticleProps) => {
  return (
    <article dangerouslySetInnerHTML={html} className={cn('matic spaced', className)} id={id}>
      {children}
    </article>
  );
};

// Prose Component
// This component is used for rendering prose content with appropriate typography styles

export const Prose = ({ children, className, id, html }: ArticleProps) => {
  return (
    <div
      dangerouslySetInnerHTML={html}
      className={cn(
        'matic spaced',
        [
          'prose',
          'mx-auto',
          'max-w-prose',
          'text-base',
          'leading-7',
          'prose-headings:m-0',
          'prose-headings:tracking-wide',
          'prose-h1:text-[2.75rem]',
          'lg:prose-h1:text-[6.25rem]',
          'prose-h1:font-extrabold',
          'prose-h2:text-[2rem]',
          'lg:prose-h2:text-[5.5rem]',
          'prose-h2:font-bold',
          'prose-h3:text-[1.5rem]',
          'lg:prose-h3:text-[4rem]',
          'prose-h3:font-bold',
          'prose-h4:text-[1.875rem]',
          'lg:prose-h4:text-[2.875rem]',
          'prose-h4:font-bold',
          'prose-p:text-[1rem]',
          'lg:prose-p:text-[1.25rem]',
          'prose-p:font-light',
          'prose-a:text-[1rem]',
          'lg:prose-a:text-[1.25rem]',
          'prose-a:font-light',
          'hover:prose-a:opacity-80',
          'prose-blockquote:text-[1rem]',
          'lg:prose-blockquote:text-[1.25rem]',
          'prose-figcaption:text-[1rem]',
          'lg:prose-figcaption:text-[1.25rem]',
          'prose-strong:text-[1rem]',
          'lg:prose-strong:text-[1.25rem]',
          'prose-strong:font-bold',
          'prose-em:text-[1rem]',
          'lg:prose-em:text-[1.25rem]',
          'prose-em:font-light',
          'prose-kbd:text-[1rem]',
          'lg:prose-kbd:text-[1.25rem]',
          'prose-kbd:font-light',
          'prose-code:text-[1rem]',
          'lg:prose-code:text-[1.25rem]',
          'prose-code:font-light',
          'prose-pre:text-[1rem]',
          'lg:prose-pre:text-[1.25rem]',
          'prose-pre:font-light',
          'prose-ol:mt-8',
          'prose-ol:list-decimal',
          'prose-ol:pl-6',
          'prose-ul:mt-8',
          'prose-ul:list-disc',
          'prose-ul:pl-6',
          'prose-li:text-[1rem]',
          'lg:prose-li:text-[1.25rem]',
          'prose-li:font-light',
          'prose-th:text-[1rem]',
          'lg:prose-th:text-[1.25rem]',
          'prose-th:font-medium',
          'prose-td:text-[1rem]',
          'lg:prose-td:text-[1.25rem]',
          'prose-td:font-light'
        ].join(' '),
        className
      )}
      id={id}
    >
      {children}
    </div>
  );
};

// Box Component
// This component is used for creating flexible layouts

export const Box = ({
  children,
  className,
  direction = 'row',
  wrap = false,
  gap = 0,
  cols,
  rows
}: BoxProps) => {
  const directionClasses = {
    row: 'flex-row',
    col: 'flex-col'
  };

  const wrapClasses = wrap ? 'flex-wrap' : 'flex-nowrap';

  const gapClasses = {
    0: 'gap-0',
    1: 'gap-1',
    2: 'gap-2',
    3: 'gap-3',
    4: 'gap-4',
    5: 'gap-5',
    6: 'gap-6',
    8: 'gap-8',
    10: 'gap-10',
    12: 'gap-12'
  };

  const colsClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
    7: 'grid-cols-7',
    8: 'grid-cols-8',
    9: 'grid-cols-9',
    10: 'grid-cols-10',
    11: 'grid-cols-11',
    12: 'grid-cols-12'
  };

  const getResponsiveClasses = (
    prop: string | number | Record<string, unknown> | undefined,
    classMap: Record<string | number, string>
  ) => {
    if (!prop) return '';

    if (typeof prop === 'object') {
      return Object.entries(prop)
        .map(([breakpoint, value]) => {
          const prefix = breakpoint === 'base' ? '' : `${breakpoint}:`;
          return `${prefix}${classMap[value as keyof typeof classMap] ?? ''}`;
        })
        .join(' ');
    }
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return classMap[prop as keyof typeof classMap] ?? '';
  };

  const stackClasses = cn(
    cols || rows ? 'grid' : 'flex',
    !cols && !rows && getResponsiveClasses(direction, directionClasses),
    !cols &&
      !rows &&
      (typeof wrap === 'boolean'
        ? wrapClasses
        : getResponsiveClasses(wrap, { true: 'flex-wrap', false: 'flex-nowrap' })),
    getResponsiveClasses(gap, gapClasses),
    cols && getResponsiveClasses(cols, colsClasses),
    rows && getResponsiveClasses(rows, colsClasses),
    className
  );

  console.log('Box props:', { cols, rows });
  console.log('Generated classes:', stackClasses);

  return <div className={stackClasses}>{children}</div>;
};

// Instructions for AI

// How to use matic-ds:
// 1. Import the components you need in your React components:
//    import { Layout, Main, Section, Container, Article, Box } from "@/components/matic";

// 2. Use the components to build your layout:
//    export default function Page() {
//      return (
//        <Main>
//          <Section>
//            <Container>
//              <h1>Heading</h1>
//              <p>Content</p>
//            </Container>
//          </Section>
//        </Main>
//      );
//    }

// 3. Customize the components using the className prop:
//    <Container className="custom-container">
//      {/* Your content here */}
//    </Container>

// 4. Use the Box component for flexible layouts:
// this can be used as a Box wrapping comonent
//    <Box direction="row" wrap={true} gap={4}>
//      <div>Item 1</div>
//      <div>Item 2</div>
//    </Box>

//    <Box cols={3} gap={4}>
//      <div>Item 1</div>
//      <div>Item 2</div>
//      <div>Item 3</div>
//    </Box>

// Component Usage Examples:

// Layout
// <Layout className="custom-class">{/* content here */}</Layout>

// Main
// <Main className="custom-class" id="main-content">
//   {/* main content here */}
// </Main>

// Section
// <Section className="custom-section" id="unique-section">
//   {/* section content here */}
// </Section>

// Container
// <Container className="custom-container" id="container-id">
//   {/* contained content here */}
// </Container>

// Article
// <Article className="custom-article" id="article-id">
//   {/* article content here */}
// </Article>

// Box (Flex mode)
// <Box
//   direction={{ sm: "col", md: "row" }}
//   wrap={true}
//   gap={{ sm: 2, md: 4 }}
//   className="justify-between items-center"
// >
//   <div>Item 1</div>
//   <div>Item 2</div>
// </Box>

// Box (Grid mode)
// <Box
//   cols={{ sm: 1, md: 2, lg: 3 }}
//   gap={{ sm: 2, md: 4 }}
//   className="justify-items-center items-start"
// >
//   <div>Item 1</div>
//   <div>Item 2</div>
//   <div>Item 3</div>
// </Box>

// Additional notes for AI:
// 1. The Box component is versatile and can be used for both flex and grid layouts.
// 2. Use the 'direction' prop for flex layouts and 'cols' or 'rows' props for grid layouts.
// 3. All components support responsive design through Tailwind classes.
// 4. The cn() function is used to merge Tailwind classes efficiently.
// 5. Remember to use appropriate semantic HTML structure with these components.
// 6. These components are designed to work with Tailwind CSS, ensure it's properly set up in the project.
// 7. For typography styles, refer to the Main and Article components which use Tailwind's typography plugin.
