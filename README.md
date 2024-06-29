# Mazer React Components

> **Note**: This is a minor alpha release (0.0.6-alpha.3). This version is still in development and may contain bugs or incomplete features.

This library is a wrapper for the open source bootstrap 5 theme [Mazer](https://github.com/zuramai/mazer) by [Saugi](https://github.com/zuramai). It provides a set of React components to help build consistent layouts and sidebars for your applications. It ensures that the end-implementing app doesn't have to worry about layout or design, providing a structured way to define sidebar items and layouts.

## Attribution

 - [Mazer](https://github.com/zuramai/mazer) by [Saugi](https://github.com/zuramai)
 - [Bootstrap](https://github.com/twbs/bootstrap) by [twbs](https://github.com/twbs/bootstrap)

## Features

- **Layout Setup**: Use different layouts like `DefaultLayout`, `SingleLayout`, and `VerticalNavbarLayout`.
- **Sidebar**: Define sidebars with nested sidebar items.
- **Context Management**: Easily manage layout configurations using React Context.

## Installation

To install the library, use npm or yarn:

```bash
npm install mazer-react-components
```

## Usage
### Layout Setup
To use a layout, wrap your page component with the LayoutProvider and specify the layout configuration.

#### Example
```tsx
import React from 'react';
import { LayoutProvider } from 'mazer-react-components';
import LayoutRenderer from 'mazer-react-components/LayoutRenderer';
import SidebarItem from 'mazer-react-components/SidebarItem';

const Home: React.FC = () => {
  const layoutConfig = {
    type: 'default',
    sideBarContent: (
      <>
        <SidebarItem title="Main" />
        <SidebarItem text="Dashboard" href="/dashboard" />
        <SidebarItem text="Sub Menu">
          <SidebarItem text="Sub Item 1" href="/sub-item-1" />
          <SidebarItem text="Sub Item 2" href="/sub-item-2">
            <SidebarItem text="Sub Sub Item 1" href="/sub-sub-item-1" />
            <SidebarItem text="Sub Sub Item 2" href="/sub-sub-item-2" />
          </SidebarItem>
        </SidebarItem>
      </>
    ),
    mainContent: (
      <>
        <h1>Home Page</h1>
      </>
    ),
  };

  return (
    <LayoutProvider initialConfig={layoutConfig}>
      <div className="container">
        <LayoutRenderer />
      </div>
    </LayoutProvider>
  );
};

export default Home;
```
### Different Layouts
You can use different layout types by changing the type in the layout configuration.

#### Default Layout
```tsx
const layoutConfig = {
  type: 'single',
  mainContent: (
    <>
      <h1>Single Column Page</h1>
    </>
  ),
};

```
#### Single Column Layout
```tsx
const layoutConfig = {
  type: 'single',
  mainContent: (
    <>
      <h1>Single Column Page</h1>
    </>
  ),
};
```
#### Vertical Navbar Layout
```tsx
const layoutConfig = {
  type: 'vertical-navbar',
  sideBarContent: (
    <>
      <SidebarItem text="Home" href="/" />
      <SidebarItem text="About" href="/about" />
    </>
  ),
  mainContent: (
    <>
      <h1>Vertical Navbar Page</h1>
    </>
  ),
};
```
### Sidebars and Nested Sidebar Items

Define Sidebars with nested items

#### Example
```tsx
import React from 'react';
import { Sidebar } from 'mazer-react-components';
import SidebarItem from 'mazer-react-components/SidebarItem';

const MySidebar: React.FC = () => (
  <Sidebar>
    <SidebarItem title="Main" />
    <SidebarItem text="Dashboard" href="/dashboard" />
    <SidebarItem text="Sub Menu">
      <SidebarItem text="Sub Item 1" href="/sub-item-1" />
      <SidebarItem text="Sub Item 2" href="/sub-item-2">
        <SidebarItem text="Sub Sub Item 1" href="/sub-sub-item-1" />
        <SidebarItem text="Sub Sub Item 2" href="/sub-sub-item-2" />
      </SidebarItem>
    </SidebarItem>
  </Sidebar>
);

export default MySidebar;
```

## Advanced Usage
### Higher Order Component (HOC)
Simplify layout wrapping by encapsulating layout logic in an HOC.

#### withLayout.tsx
```tsx
import React from 'react';
import { LayoutProvider } from 'mazer-react-components';
import LayoutRenderer from 'mazer-react-components/LayoutRenderer';
import { LayoutConfig } from 'mazer-react-components/contexts/LayoutContext';

const withLayout = (Component: React.ComponentType, layoutConfig: LayoutConfig) => {
  return (props: any) => (
    <LayoutProvider initialConfig={layoutConfig}>
      <div className="container">
        <LayoutRenderer />
        <Component {...props} />
      </div>
    </LayoutProvider>
  );
};

export default withLayout;
```
#### usage in pages
```tsx
import React from 'react';
import withLayout from './hoc/withLayout';

const Home: React.FC = () => (
  <>
    <h1>Home Page</h1>
  </>
);

const SingleColumnPage: React.FC = () => (
  <>
    <h1>Single Column Page</h1>
  </>
);

const homeLayoutConfig = {
  type: 'default',
  sideBarContent: <div>HI</div>,
  mainContent: <div>Main Content for Home</div>,
};

const singleLayoutConfig = {
  type: 'single',
  mainContent: <div>Main Content for Single Column Page</div>,
};

export const HomeWithLayout = withLayout(Home, homeLayoutConfig);
export const SingleColumnPageWithLayout = withLayout(SingleColumnPage, singleLayoutConfig);
```

### Centralize Layout Management with Routes
Centralize layout configuration within routing logic.

#### App.tsx
```tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SingleColumnPage from './pages/SingleColumnPage';
import { LayoutProvider } from 'mazer-react-components/contexts/LayoutContext';
import LayoutRenderer from 'mazer-react-components/LayoutRenderer';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    layoutConfig: {
      type: 'default',
      sideBarContent: <div>HI</div>,
      mainContent: <div>Main Content for Home</div>,
    },
  },
  {
    path: '/single',
    component: SingleColumnPage,
    layoutConfig: {
      type: 'single',
      mainContent: <div>Main Content for Single Column Page</div>,
    },
  },
];

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        {routes.map(({ path, exact, component: Component, layoutConfig }) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            render={(props) => (
              <LayoutProvider initialConfig={layoutConfig}>
                <div className="container">
                  <LayoutRenderer />
                  <Component {...props} />
                </div>
              </LayoutProvider>
            )}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default App;
```
### Custom Layout Wrapper Component
Encapsulate layout configuration within a reusable component.

#### LayoutWrapper.tsx
```tsx
import React from 'react';
import { LayoutProvider } from 'mazer-react-components/contexts/LayoutContext';
import LayoutRenderer from 'mazer-react-components/LayoutRenderer';
import { LayoutConfig } from 'mazer-react-components/contexts/LayoutContext';

interface LayoutWrapperProps {
  layoutConfig: LayoutConfig;
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ layoutConfig, children }) => {
  return (
    <LayoutProvider initialConfig={layoutConfig}>
      <div className="container">
        <LayoutRenderer />
        {children}
      </div>
    </LayoutProvider>
  );
};

export default LayoutWrapper;
```

#### Usage in Pages
```tsx
import React from 'react';
import LayoutWrapper from './components/LayoutWrapper';

const Home: React.FC = () => (
  <LayoutWrapper layoutConfig={{
    type: 'default',
    sideBarContent: <div>HI</div>,
    mainContent: <div>Main Content for Home</div>,
  }}>
    <h1>Home Page</h1>
  </LayoutWrapper>
);

const SingleColumnPage: React.FC = () => (
  <LayoutWrapper layoutConfig={{
    type: 'single',
    mainContent: <div>Main Content for Single Column Page</div>,
  }}>
    <h1>Single Column Page</h1>
  </LayoutWrapper>
);

export { Home, SingleColumnPage };
```


By using these components and configurations, you can easily set up and manage different layouts and sidebars in your application.